import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../ChatApp.css';
import MessageBox from './MessageBox'
import MessageThread from './MessageThread'

const ChatRoom = (props) => {
    // notice that we pass a callback function to initialize the socket
    // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        // we need to set up all of our event listeners
        // in the useEffect callback function
        console.log('Is this running?');
        socket.on('Welcome', data => console.log(data));
        socket.on('new_message_from_server', data => {
            console.log(data.message);
            console.log(data.author);
            console.log("message received");
            // if the data has some images associated, first
            // print the text, then print the images afterwards
            setMessages(prevMessages => {
                return [...prevMessages, data];
            })
        })

        // note that we're returning a callback function
        // this ensures that the underlying socket will be closed if App is unmounted
        // this would be more critical if we were creating the socket in a subcomponent
        return () => socket.disconnect(true);
    }, []);

    const submitMessage = (msg) => {
        socket.emit("event_from_client", {message:msg, author:props.username});
    }

    return (
        <div className="chatRoom">
            <h1>MERN Chat</h1>
            <MessageThread username={props.username} messages={messages}></MessageThread>
            <MessageBox submitMessage={submitMessage}></MessageBox>
        </div>
    )
}

export default ChatRoom;