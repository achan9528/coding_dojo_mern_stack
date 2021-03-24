import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';
import ChatRoom from './ChatRoom'
import HomePage from './HomePage'

function Chat() {
    const [userName, setUsername] = useState("");

    const usernameSubmit = (username) => {
        setUsername(username);
    }

    const test = (
        <div>Test</div>
    )

    if (userName) {
        return (
            <ChatRoom username={userName}></ChatRoom>
        )
    } else {
        return (
            <HomePage usernameSubmit={usernameSubmit}></HomePage>
        )
    }
}

export default Chat;