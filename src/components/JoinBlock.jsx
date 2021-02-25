import React from 'react'
import socket from "./../socket";

const JoinBlock = () => {
    return (
        <div>
            <input type="text" placeholder="Room ID" value=''/>
            <input type="text" placeholder='Ваше имя' value=''/>
            <button>Join</button>
        </div>
    )
}

export default JoinBlock;

