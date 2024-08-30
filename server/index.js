const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("server is listening");
});

const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("data from the client: ", data);
        ws.send("Hi bro, just got your message");
    });
});
