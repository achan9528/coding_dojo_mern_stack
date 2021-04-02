import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import '../App.css';
import '../ChatApp.css';

const MessageThread = (props) => {

    useEffect(() => {
        scrollToBottom();
    }, [props])

    const scrollToBottom = () => {
        // document.getElementById("documentBody").scrollIntoView()
        document.getElementById("dummy").scrollIntoView(
            true
        );
    }

    const findImages = (src) => {
        return (
            <img src={src}></img>
        )
    }
    const consolidateImages = (imgList) => {
        return (
            <ul className="unbulleted-noPadding">
                {
                    imgList.map((item, key) => {
                        console.log(item);
                        return (
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
                        styleName = "userMessage"
                    } else {
                        styleName = "otherMessage"
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
                                {/* <span className={styleName + "Span"}>
                                    {item.author}
                                </span> */}
                                <ul className={styleName}>
                                    <li className="author">
                                        <span className={styleName + "Span"}>
                                            {item.author}
                                        </span>
                                    </li>
                                    <li className="message">
                                        <ul className="unbulleted-noPadding">
                                            <li>{item.message.text}</li>
                                            <li>{item.message.translation}</li>
                                            <li>{consolidateImages(images)}</li>
                                        </ul>
                                    </li>
                                    
                                </ul>
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