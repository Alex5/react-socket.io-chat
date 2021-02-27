import React from 'react'

import './Chat.scss'

const Chat = ({users, messages, roomId}) => {

    console.log(users)
    return (
        <div className="chat">
            <h1>Realtime Chat</h1>
            <div className="chat-container">
                <div className="sidebar">
                    <div className="sidebar-room">
                        <div className="sidebar-room__name active">Room: <span>{roomId}</span></div>
                        <div className="sidebar-room__channel">
                            <p >Text channel ({users.length})</p>
                            <ul>

                                {users.map((name, index) => (
                                    <li key={name + index}><span></span>{name}</li>
                                ))}
                            </ul>
                            <p>Video channel</p>
                            <ul>
                                <li>Tanisha King</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-header">
                        <div className="content-name">
                            Chat
                        </div>
                    </div>

                    <div className="content-separator"></div>
                    <div className="content-messages">
                        <div className="content-messages__item">
                            <span>Tanisha King</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris non sapien dui. Quisque dapibus sit amet nibh eget congue. Sed sit amet lacus
                                eget
                                velit laoreet dapibus id tempor elit. In condimentum nunc vel molestie mollis. Maecenas
                                eget
                                leo metus. Ut eget sollicitudin libero. Pellentesque sed dapibus nunc, non pretium odio.
                                Ut
                                non pretium massa, at mollis diam. Nulla sem mauris, finibus ut mauris in, venenatis
                                tristique justo.</p>
                        </div>
                    </div>
                    <div className="content-input">
                        <textarea rows='3' />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat