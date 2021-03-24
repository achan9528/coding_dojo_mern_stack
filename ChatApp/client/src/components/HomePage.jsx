import { PromiseProvider } from 'mongoose';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';

const HomePage = (props) => {
    const [username, setUsername] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        props.usernameSubmit(username);
    }

    return (
        <div className="Home">
            <h1>MERN Chat</h1>
            <form onSubmit={submitHandler}>
                <h2>I want to start chatting with the name...</h2>
                <label>
                    <input onChange={e => { setUsername(e.target.value) }} placeholder="My name"></input>
                </label>
                <button>Start Chatting</button>
            </form>
        </div>
    );
}

export default HomePage;