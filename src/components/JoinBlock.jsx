import React from 'react'
import axios from "axios";
import socket from "../socket";

import './JoinBlock.scss'

const JoinBlock = ({onLogin}) => {
    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('Неверные данные')
        }
        const obj = {
            roomId, userName
        }
        setIsLoading(true)
        await axios.post('/rooms', obj);
        onLogin(obj);
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
                       value={userName}
                       onChange={e => setUserName(e.target.value)}/>
                <button disabled={isLoading} onClick={onEnter}>{isLoading ? 'JOINED...' : 'JOIN'}</button>
            </div>
        </div>
    )
}

export default JoinBlock;

