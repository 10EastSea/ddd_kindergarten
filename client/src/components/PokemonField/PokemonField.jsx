/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import background from '../../images/grass_background.svg';
import squirtleImgSrc from '../../images/squirtle.png';
import charmanderImgSrc from '../../images/charmander.png';

// 필드 정보
const FIELD_CONSTANTS = {
	MAX_WIDTH: window.innerWidth,
	MAX_HEIGHT: window.innerHeight,

	IMG_WIDTH: 100,
	IMG_HEIGHT: 100,

	KEY_LEFT: 37,
	KEY_DOWN: 38,
	KEY_RIGHT: 39,
	KEY_UP: 40,

	SPEED: 8,
};

// 초기 생성위치: 중앙
const firstX = (FIELD_CONSTANTS.MAX_WIDTH - FIELD_CONSTANTS.IMG_WIDTH) / 2;
const firstY = (FIELD_CONSTANTS.MAX_HEIGHT - FIELD_CONSTANTS.IMG_HEIGHT) / 2;

const Pokemon = ({submitMovedata, otherPos, myId}) => {
	const canvasRef = useRef(null);
	const requestAnimationRef = useRef(null);
	const positionRef = useRef({ x: firstX, y: firstY });
	
	const [otherLastPos, setOtherLastPos] = useState({});
	const [pressedKey, setPressedKey] = useState(null);

	const move = (x, y) => {
		const newX = positionRef.current.x + x;
		const newY = positionRef.current.y + y;
		if (newX < 0 || newX > canvasRef.current.width - FIELD_CONSTANTS.IMG_WIDTH) return;
		if (newY < 0 || newY > canvasRef.current.height - FIELD_CONSTANTS.IMG_HEIGHT) return;

		positionRef.current = { x: newX, y: newY };
	};

	const render = () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		const charmanderImg = new Image();
		charmanderImg.src = charmanderImgSrc;
		charmanderImg.onload = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			context.drawImage(charmanderImg, positionRef.current.x, positionRef.current.y);
			
			var isEmpty = Object.entries(otherPos).length === 0;
			if(!isEmpty && otherPos.userId != myId) {
				setOtherLastPos({x: otherPos.moveData.x, y: otherPos.moveData.y})
				const squirtleImg = new Image();
				squirtleImg.src = squirtleImgSrc;
				context.drawImage(squirtleImg, otherLastPos.x, otherLastPos.y);
			}
			
			isEmpty = Object.entries(otherLastPos).length === 0;
			if(!isEmpty) {
				const squirtleImg = new Image();
				squirtleImg.src = squirtleImgSrc;
				context.drawImage(squirtleImg, otherLastPos.x, otherLastPos.y);
			}
		}; 
		
		handleKey();
		requestAnimationRef.current = requestAnimationFrame(render);
	};

	const handleKey = () => {
		switch (pressedKey) {
			case FIELD_CONSTANTS.KEY_LEFT:
				move(-1 * FIELD_CONSTANTS.SPEED, 0);
				submitMovedata(positionRef.current); // 서버에 정보전송
				return;
			case FIELD_CONSTANTS.KEY_DOWN:
				move(0, -1 * FIELD_CONSTANTS.SPEED);
				submitMovedata(positionRef.current); // 서버에 정보전송
				return;
			case FIELD_CONSTANTS.KEY_RIGHT:
				move(FIELD_CONSTANTS.SPEED, 0);
				submitMovedata(positionRef.current); // 서버에 정보전송
				return;
			case FIELD_CONSTANTS.KEY_UP:
				move(0, FIELD_CONSTANTS.SPEED);
				submitMovedata(positionRef.current); // 서버에 정보전송
				return;
			case null:
				return;
			default:
				move(0, 0);
				return;
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			e.preventDefault();
			setPressedKey(e.keyCode);
		});
		window.addEventListener('keyup', () => setPressedKey(null));

		requestAnimationRef.current = requestAnimationFrame(render);
		return () => { cancelAnimationFrame(requestAnimationRef.current); };
	});

	return (
		<canvas
			ref={canvasRef}
			style={{
				// backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				overflow: 'hidden',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		></canvas>
	);
};

export default Pokemon;