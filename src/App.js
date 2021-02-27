import React from 'react'
import socket from "./socket";

import reducer from "././components/reducer";
import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";
import axios from "axios";

const App = () => {

    const [state, dispatch] = React.useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: []
    })

    const onLogin = async (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj
        })
        socket.emit('ROOM:JOIN', obj)
        const {data} = await axios.get(`/rooms/${obj.roomId}`)
        setUsers(data.users)
        dispatch({
            type: 'SET_DATA',
            payload: data,
        });
    }

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users
        })
    }

    React.useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers)
    }, [])


    window.socket = socket

    return (
        <>
            {!state.joined ? <JoinBlock onLogin={onLogin}/> : <Chat {...state}/>}
        </>
    );
}

export default App;
