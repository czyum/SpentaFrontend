import socketClient from "socket.io-client";

const socket=socketClient.connect("http://localhost:8000",{
    transports:['websocket','polling']
});


export default socket;