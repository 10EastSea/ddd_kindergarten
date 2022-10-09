import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import PokemonField from '../components/PokemonField';
import { SocketContext } from '../contexts/SocketContext';

const Field = () => {
    const { fieldId, userId } = useParams();
    const { joinField, sendMovedata, updateMovedata } = useContext(SocketContext);
    const [ otherPos, setOtherPos ] = useState({});
    const navigate = useNavigate();
    
    const updateOtherPos = (moveData) => {
        setOtherPos(moveData);
    }
	const submitMovedata = (moveData) => {
        sendMovedata({fieldId, userId, moveData});
    }
        
    useEffect(() => {
        try {
            joinField({userId, fieldId});
            updateMovedata(updateOtherPos);
        } catch {
            navigate('/');
        }
    }, []);
    
    return (<PokemonField submitMovedata={submitMovedata} otherPos={otherPos} myId={userId}/>);
}

export default Field;
