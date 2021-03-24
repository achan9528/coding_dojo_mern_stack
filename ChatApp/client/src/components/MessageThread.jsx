import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import '../App.css';

const MessageThread = (props) => {

    useEffect( ()=>{

    }, [])

    const styles = {
        overflowY: "scroll",
        listStyleType: "none",
        margin: "auto",
        padding: "0px",
        height: "250px",
        width: "75%",
    }
    
    const scrollToBottom = () => {
        props.messages[props.messages.length].scrollIntoView();
    }

    return (
        <ul style={styles}>
            {
                props.messages.map( (item, key) => {
                let itemStyle = {}
                if (item.author == props.username){
                    itemStyle = {
                        backgroundColor: "blue",
                        color:"white",
                        // display: "block",
                        // verticalAlign: "middle",
                        // position: "relative",
                        // left: "25%",
                        maxWidth: "75%",
                        textAlign: "left",
                        // wordWrap: "break-word",
                        // overflowWrap: "break-word",
                        // margin: "5px"
                        // padding: ".5% 1%",
                    }
                } else{
                    itemStyle = {
                        backgroundColor: "white",
                        // display: "inline-block",
                        // verticalAlign: "middle",
                        position: "relative",
                        left: "25%",
                        maxWidth: "75%",
                        textAlign: "left",
                        // padding: ".5% 1%",
                        // wordWrap: "break-word",
                        // overflowWrap: "break-word"
                    }
                }
                return (
                    <li key={key}>
                        {/* {item.author} said: {item.message} */}
                        <div style={itemStyle}>
                            {item.message}
                        </div>
                    </li>
                )})
            }
        </ul>
    )
}

export default MessageThread;