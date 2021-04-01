import { PromiseProvider } from 'mongoose';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';

const HomePage = (props) => {
    const [username, setUsername] = useState("")
    const [socketName, setSocketName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        props.submitHandler(username, socketName);
    }

    return (
        <div className="Home">
            <h1>MERN Chat</h1>
            <form onSubmit={submitHandler}>
                <h2>I want to start chatting with the name...</h2>
                <label>
                    <input onChange={e => { setUsername(e.target.value) }} placeholder="My name"></input>
                </label>
                <label>
                    Chat Room Name:
                    <input name="socketName"
                        onChange={e => { setSocketName(e.target.value) }}
                        value={socketName}></input>
                </label>
                <button>Start Chatting</button>
            </form>
        </div>
    );
}

export default HomePage;