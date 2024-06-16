import { Server } from "socket.io";
import { ChatI } from "./src/app/chat-i";
const { MongoClient, ServerApiVersion } = require("mongodb"); 


const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
  }
}
);

const io = new Server(8080, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});


let chats: Array<ChatI> = [];

io.on("connection", (socket) => {
    // Connect the client to the server (optional starting in v4.7) //MongoDB
    client.connect();

    socket.emit("chats", ['connected']);
    console.log('a user connected');
    // note: we could also create a CRUD (create/read/update/delete) service for the todo list
    socket.on("send-chats", (receivedChat: ChatI) => {
      // store it locally
      console.log(receivedChat);
      const result = client.db("SocialApp").collection('messages').insertOne(receivedChat);
      // broadcast to everyone but the sender
      // if(result.acknowledged){
        receivedChat.sender = 'you';
        socket.broadcast.emit("chats", receivedChat);
      // }
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
      // Ensures that the client will close when you finish/error //MongoDB
      client.close();
    });

});


