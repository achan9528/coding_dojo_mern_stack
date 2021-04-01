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
            <h1>Welcome to the world</h1>
            <form onSubmit={submitHandler}>
                <input onChange={e => { setUsername(e.target.value) }}
                    placeholder="Username"></input>
                <input name="socketName"
                    onChange={e => { setSocketName(e.target.value) }}
                    value={socketName}
                    placeholder="Room Name"></input>
                <button className="arrow"></button>
            </form>
        </div>
    );
}

export default HomePage;