import React from 'react'
import socket from "../socket";

import './Chat.scss'

const Chat = ({users, messages, roomId, userName, onAddMessage}) => {
    const [messageValue, setMessageValue] = React.useState('')
    const messagesRef = React.useRef(null)

    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            roomId,
            text: messageValue,
        });
        onAddMessage({ userName, text: messageValue });
        setMessageValue('');
    };

    React.useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
    }, [messages]);

    console.log(users)
    return (
        <div className="chat">
            <h1>Realtime Chat</h1>
            <div className="chat-container">
                <div className="sidebar">
                    <div className="sidebar-room">
                        <div className="sidebar-room__name">Room: <span>{roomId}</span></div>
                        <div className="sidebar-room__channel">
                            <p>Text channel ({users.length})</p>
                            <ul>

                                {users.map((name, index) => (
                                    <li key={name + index}><span></span>{name}</li>
                                ))}
                            </ul>
                            <p>Video channel</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar-small">
                    <div className="sidebar-room">
                        <h3>Room: <span>{roomId}</span></h3>
                    </div>
                    {/*<div className="sidebar-small__avatars">*/}
                    {/*    <div>1</div>*/}
                    {/*    <div>2</div>*/}
                    {/*    <div>3</div>*/}
                    {/*</div>*/}
                </div>
                <div className="content">
                    <div className="content-header">
                        <div className="content-name">
                            Chat
                        </div>
                    </div>

                    <div className="content-separator"></div>
                    <div ref={messagesRef} className="content-messages">
                        {messages.map(message => (
                            <div className="content-messages__item">
                                <span>{message.userName}:</span>
                                <div className="content-messages__item-text">
                                    <p>{message.text}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="content-input">
                        <textarea value={messageValue} onChange={e => setMessageValue(e.target.value)} rows='3'/>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat