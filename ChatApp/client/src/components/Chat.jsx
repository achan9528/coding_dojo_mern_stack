import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';
import ChatRoom from './ChatRoom'
import HomePage from './HomePage'

function Chat() {
    const [userName, setUsername] = useState("");
    const [socketName, setSocketName] = useState("");

    const submitHandler = (userName, socketName) => {
        setUsername(userName);
        setSocketName(socketName);
    }

    const test = (
        <div>Test</div>
    )

    if (userName) {
        return (
            <ChatRoom userName={userName}
                socketName={socketName}></ChatRoom>
        )
    } else {
        return (
            <HomePage submitHandler={submitHandler}
                selectSocket={setSocketName}></HomePage>
        )
    }
}

export default Chat;