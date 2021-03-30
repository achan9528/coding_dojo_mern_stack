import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import '../App.css';

const MessageThread = (props) => {

    useEffect(() => {

    }, [])

    const styles = {
        overflowY: "scroll",
        listStyleType: "none",
        margin: "auto",
        padding: "0px",
        height: "250px",
        width: "75%",
    }

    const bubbleEdge = {
        position: "relative",
        backgroundColor: "red",
    }

    const scrollToBottom = () => {
        props.messages[props.messages.length].scrollIntoView();
    }

    const findImages = (src) => {
        const imgStyle = {
            maxWidth: "100%",
            paddingTop: "0%",
        }
        return (
            <img style={imgStyle} src={src}></img>
        )
    }
    const consolidateImages = (imgList) =>{
        const listStyle={
            listStyleType: "none",
            padding: "0px",
        }
        return(
            <ul style={listStyle}>
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
        <ul style={styles}>
            {
                props.messages.map((item, key) => {
                    let itemStyle = {}
                    if (item.author == props.username) {
                        itemStyle = {
                            // backgroundColor: "blue",
                            // color: "white",
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
                    } else {
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

                    let images = []
                    if (item.message.images.length > 0) {
                        // for each image, print an image tag
                        for (let i = 0; i < item.message.images.length; i++) {
                            console.log(item.message.images[i]);
                            images.push(findImages(item.message.images[i]));
                        }
                    }
                    console.log(consolidateImages(images));
                    let test = consolidateImages(images);
                    return (
                        <li key={key}>
                            {/* {item.author} said: {item.message} */}
                            <div style={itemStyle}>
                                {item.message.text}
                                {consolidateImages(images)}
                                {/* <div style={bubbleEdge}></div> */}
                            </div>

                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MessageThread;