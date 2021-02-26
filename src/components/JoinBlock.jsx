import React from 'react'
import axios from "axios";
import socket from "../socket";

import './JoinBlock.scss'

const JoinBlock = ({onLogin}) => {
    const [roomId, setRoomId] = React.useState('')
    const [username, setUserName] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const onEnter = () => {
        if (!roomId || !username) {
            return alert('Неверные данные')
        }
        axios
            .post('/rooms', {
                roomId, username
            })
            .then(onLogin)
    }

    return (
        <div className="join-block">
            <h1>Realtime Chat <span>&#129311;</span></h1>
            <div className="input-form">
                <input autoFocus={true}
                       placeholder="ROOM ID"
                       type="text"
                       value={roomId}
                       onChange={e => setRoomId(e.target.value)}/>
                <input type="text"
                       placeholder='Ваше имя'
                       value={username}
                       onChange={e => setUserName(e.target.value)}/>
                <button onClick={onEnter}>JOIN</button>
            </div>
        </div>
    )
}

export default JoinBlock;

