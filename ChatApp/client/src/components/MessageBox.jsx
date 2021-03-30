import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';

const MessageBox = (props) => {
    const [userMessage, setUserMessage] = useState("");

    const enterListener = (e) => {
        if (e.code === "Enter") {
            e.preventDefault()
            document.getElementById("submitMessage").click();
            clearMessageBox();
        }
    }

    const clearMessageBox = () => {
        // delete each child element
        while (document.getElementById("messageInputBox").firstChild) {
            document.getElementById("messageInputBox").removeChild(
                document.getElementById("messageInputBox")
                    .firstChild
            );
        }
        // clear the inner text in case there is any message
        // left
        document.getElementById("messageInputBox").innerText = "";
        console.log("clearing Message")
    }

    const submitHandler = (e) => {
        // alert("triggered the submitHandler");
        e.preventDefault();
        // for each pasted item, grab each pasted image if any
        let imgSrcArr = [];
        for (let i = 0; i < document.getElementById("messageInputBox").children.length; i++) {
            let temp = document.getElementById("messageInputBox").children[i];
            if (temp.tagName == "IMG") {
                imgSrcArr.push(temp.src);
            }
        }
        // submit the message
        props.submitMessage({
            text: e.target.children[0].innerText,
            images: imgSrcArr,
        });
        clearMessageBox();
    }

    return (
        <form className="messageInput" onSubmit={submitHandler}>
            <div
                contentEditable={true}
                value={userMessage}
                onKeyDown={(e) => { enterListener(e) }}
                id="messageInputBox"></div>
            <button id="submitMessage">Send</button>
        </form>
    )
}

export default MessageBox;