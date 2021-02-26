import React from 'react'

import './Chat.scss'

const Chat = () => {
    return (
        <div className="chat">
            <h1>Realtime Chat</h1>
            <div className="chat-container">
                <div className="sidebar">
                    <div className="sidebar-room">
                        <div className="sidebar-room__name">Room 1</div>
                        <div className="sidebar-room__channel">
                            <p>Text channel</p>
                            <ul>
                                <li>Tanisha King</li>
                                <li>Mindy Crouch</li>
                                <li>Natalie Mcdaniel</li>
                            </ul>
                            <p>Video channel</p>
                            <ul>
                                <li>Tanisha King</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-room">
                        <div className="sidebar-room__name">Room 1</div>
                        <div className="sidebar-room__channel">
                            <p>Text channel</p>
                            <ul>
                                <li>Tanisha King</li>
                                <li>Mindy Crouch</li>
                                <li>Natalie Mcdaniel</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-room">
                        <div className="sidebar-room__name">Room 1</div>
                        <div className="sidebar-room__channel">
                            <p>Text channel</p>
                            <ul>
                                <li>Tanisha King</li>
                                <li>Mindy Crouch</li>
                                <li>Natalie Mcdaniel</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-room">
                        <div className="sidebar-room__name">Room 1</div>
                        <div className="sidebar-room__channel">
                            <p>Text channel</p>
                            <ul>
                                <li>Tanisha King</li>
                                <li>Mindy Crouch</li>
                                <li>Natalie Mcdaniel</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-room">
                        <div className="sidebar-room__name">Room 1</div>
                        <div className="sidebar-room__channel">
                            <p>Text channel</p>
                            <ul>
                                <li>Tanisha King</li>
                                <li>Mindy Crouch</li>
                                <li>Natalie Mcdaniel</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-header">
                        <div className="content-name">
                            Chat
                        </div>
                        {/*<div className="content-exit">*/}
                        {/*    Exit chat*/}
                        {/*</div>*/}
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
                        <input type="text"/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat