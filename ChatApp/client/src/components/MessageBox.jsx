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
        border: "2px solid black",
        display: "inline-block",
    }

    const buttonStyles = {
        verticalAlign: "top",
        display: "inline-block",
    }

    const submitHandler = (e) => {
        e.preventDefault();        
        // for each pasted item, grab each pasted image if any
        let imgSrcArr = [];
        for (let i = 0; i < document.getElementById("messageInputBox").children.length; i++) {            
            let temp = document.getElementById("messageInputBox").children[i];
            if (temp.tagName=="IMG"){
                imgSrcArr.push(temp.src);
            }
        }
        // submit the message
        props.submitMessage({
            text: e.target.children[0].innerText,
            images: imgSrcArr,
        });
        // delete each child element
        while (document.getElementById("messgeInputBox")) {
            // document.getElementById("messgeInputBox").removeChild(
            //     document.getElementById("messgeInputBox")
            //         .firstChild
            // );

        }
        // clear the inner text in case there is any message
        // left
        document.getElementById("messageInputBox").innerText = "";
        // setUserMessage("");
        
        
    }

    const test = (e) => {
        // e.preventDefault();
        // e.clipboardData.items grabs the pictures from the div
        console.log(e.clipboardData);
        console.log(e.clipboardData.items);
        console.log(e.clipboardData.items[1]);
        // console.log(e.clipboardData);
        // console.log(window);

    }

    return (
        <form style={styles} onSubmit={submitHandler}>
            <div contentEditable={true}
                onPaste={e => test(e)}
                style={textareaStyles}
                value={userMessage}
                id="messageInputBox"></div>
            <button style={buttonStyles}>Send</button>
        </form>
    )
}

export default MessageBox;