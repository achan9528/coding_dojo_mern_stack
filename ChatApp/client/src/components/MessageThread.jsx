import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import '../App.css';
import '../ChatApp.css';

const MessageThread = (props) => {

    useEffect(() => {
        scrollToBottom();
    }, [props])

    const scrollToBottom = () => {
        document.getElementById("dummy").scrollIntoView(
            true
        );
    }

    const findImages = (src) => {
        return (
            <img src={src}></img>
        )
    }
    const consolidateImages = (imgList) =>{
        return(
            <ul className="unbulleted-noPadding">
                {
                    imgList.map((item,key) =>{
                        console.log(item);
                        return(
                            <li key={key}>{item}</li>
                        )
                    })
                }
            </ul>
        )
    }
    return (
        <ul className="message-thread" id="messageThread" onChange={scrollToBottom}>
            {
                props.messages.map((item, key) => {
                    let styleName = ""
                    if (item.author == props.username) {
                        styleName="userMessage"
                    } else {
                        styleName="otherMessage"
                    }

                    let images = []
                    if (item.message.images.length > 0) {
                        // for each image, print an image tag
                        for (let i = 0; i < item.message.images.length; i++) {
                            images.push(findImages(item.message.images[i]));
                        }
                    }
                    
                    let test = consolidateImages(images);
                    return (
                        <li key={key}>
                            <div className={styleName}>
                                {item.message.text}
                                {consolidateImages(images)}
                            </div>
                        </li>
                    )
                })
            }
            <li id="dummy">
                <div></div>
            </li>
        </ul>
    )
}

export default MessageThread;