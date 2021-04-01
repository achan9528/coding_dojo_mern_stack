// server.js
const express = require('express');
const { translate } = require('bing-translate-api');
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

io.of(/\/[A-Za-z+\d]/).on("connection", (socket) => {
    const newNamespace = socket.nsp; // newNamespace.name === "/dynamic-101"
    console.log("connected")
    console.log(socket.id);
    // broadcast to all clients in the given sub-namespace
    newNamespace.emit("Welcome", "welcome message");
    socket.on("event_from_client", data => {
        console.log(data);
        if (data.message.text && data.message.langFilter != 'none') {
            // pass the string into the bing api
            translate(data.message.text, null, data.message.langFilter)
                .then(res => {
                    console.log("langFilter:" + data.message.langFilter);
                    console.log(res);
                    data.message.translation = res.translation;
                    socket.nsp.emit("new_message_from_server", data);
                }).catch(err => {
                    console.log(err);
                });
        } else {
            socket.nsp.emit("new_message_from_server", data);
        }
    });
});

