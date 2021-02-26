import React from 'react'
import reducer from "././components/reducer";

import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";

const App = () => {

    const [state, dispatch] = React.useReducer(reducer, {
        isJoin: false
    })

    const onLogin = () => {
        dispatch({
            type: 'IS_JOIN',
            payload: true
        })
    }

    console.log(state)

    return (
        <>
            {!state.isJoin ? <JoinBlock onLogin={onLogin}/> : <Chat />}
        </>
    );
}

export default App;
