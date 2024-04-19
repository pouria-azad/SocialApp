const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8090 });

wss.on('connection', (ws)=> {
    ws.on('message', (message)=>{
        console.log('received: %s', message)
        ws.send('Hello Client!');
    });

    ws.send('Hello Client!');
});