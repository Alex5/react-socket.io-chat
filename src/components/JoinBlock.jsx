import React from 'react'
import axios from "axios";
import socket from "../socket";

import './JoinBlock.scss'

const JoinBlock = ({onLogin}) => {
    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const onEnter = async () => {
        if (!userName) {
            return alert('Неверные данные')
        }
        const roomId = ID()
        const obj = {
            roomId, userName
        }
        setIsLoading(true)
        await axios.post('/rooms', obj);
        onLogin(obj);
    }

    const ID = function () {
        return Math.random().toString(36).substr(2, 9);
    };

    return (
        <div className="join-block">
            <h1>Realtime Chat <span>&#129311;</span></h1>
            <div className="input-form">
                {/*<input autoFocus={true}*/}
                {/*       placeholder="ROOM ID"*/}
                {/*       type="text"*/}
                {/*       value={roomId}*/}
                {/*       onChange={e => setRoomId(e.target.value)}/>*/}
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

