import React from 'react'

import './JoinBlock.scss'

const JoinBlock = () => {
    return (
        <div className="join-block">
            <h1>Realtime Chat <span>&#129311;</span></h1>
            <div className="input-form">
                <input autoFocus={true} placeholder="ROOM ID" type="text" value=''/>
                <input type="text" placeholder='Ваше имя' value=''/>
                <button>Join</button>
            </div>
        </div>
    )
}

export default JoinBlock;

