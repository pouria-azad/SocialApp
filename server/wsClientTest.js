const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:8080');


function initWebSocket() {
    
    socket.on('open', ()=>{
        log("WebSocket connection established.");
        sendMessage()
    })

    socket.on('message', (data)=>{
        log("Received message: " + data);
    })
    
    socket.on('close', ()=>{
        log("WebSocket connection closed.");
    })
    
    socket.on('error', (error)=>{
        log("WebSocket error: " + error);
    })
    
  }

function sendMessage() {
    var message = "hi i am Client";
    if (message.trim() !== "") {
        socket.send(message);
        message = "";
    }
}
let messageLog;

function log(message) {
    messageLog = "";
    messageLog += message + "\n";
    console.log(message);
  }

initWebSocket()