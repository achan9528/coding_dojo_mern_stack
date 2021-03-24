import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';

const MessageBox = (props) => {
    const [userMessage, setUserMessage] = useState("");

    const styles = {
        overflow: "auto",
        height: "75%",
        width: "75%",
        margin: "auto",
    }

    const textareaStyles = {
        width: "75%",
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.submitMessage(userMessage);
        setUserMessage("");
    }

    return (
        <form style={styles} onSubmit={submitHandler}>
            <label>
                <textarea style={textareaStyles} onChange = {(e) => setUserMessage(e.target.value)} value={userMessage}></textarea>
            </label>
            <button>Send</button>
        </form>
    )
}

export default MessageBox;