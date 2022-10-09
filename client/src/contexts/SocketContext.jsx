import { useEffect, createContext } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    let socket;
    
    useEffect(()=>{
        socket = io(process.env.REACT_APP_SERVER_URL);
        return () => {
            socket.disconnect();
        }
    }, [])
    
    // const joinRoom = ({roomId, userId}) => {
    //     socket.emit('JOIN_ROOM', {userId, roomId}); 
    // }
    
    // const sendMessage = ({roomId, userId, message}) => {
    //     socket.emit('SEND_MESSAGE', {roomId, userId, message});
    // }
    
    // const updateMessage = (func) => {
    //     socket.on('UPDATE_MESSAGE', (msg) => func(msg));
    // }
    
    // return (
    //     <SocketContext.Provider value={{joinRoom, sendMessage, updateMessage}}>
    //         {children}
    //     </SocketContext.Provider>
    // );
	
	const joinField = ({fieldId, userId}) => {
        socket.emit('JOIN_FIELD', {userId, fieldId}); 
    }
    
    const sendMovedata = ({fieldId, userId, moveData}) => {
		// console.log({fieldId, userId, moveData});
        socket.emit('SEND_MOVEDATA', {fieldId, userId, moveData});
    }
    
    const updateMovedata = (func) => {
        socket.on('UPDATE_MOVEDATA', (moveData) => func(moveData));
    }
    
    return (
        <SocketContext.Provider value={{joinField, sendMovedata, updateMovedata}}>
            {children}
        </SocketContext.Provider>
    );
}