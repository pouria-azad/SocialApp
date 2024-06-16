import { io,Socket } from "socket.io-client";
import { ChatI } from "./chat-i";

export class chatStore {
    chats: Array<ChatI> = [];

    constructor(){
        // let presistedChats = JSON.parse(localStorage.getItem('angular-chats') || '[]');
            this.chats.push({
                id : 1,
                content: 'hi',
                date: new Date(),
                status: false,
                sender: 'me',
            })
    }




    getDelivered(){
        return this.chats.filter((chat: ChatI)=>{ chat.status == true });
    }

    getNotDelivered(){
        return this.chats.filter((chat: ChatI)=>{ chat.status == false && chat.sender == 'me'});
    }


    toggleStatusDelivered(Chat : ChatI){
        Chat.status = !Chat.status;
        // this.updateMessage();
    }

    getLatestChatId()
    {
        return this.chats[this.chats.length - 1].id;
    }

    remove(Chat : ChatI){
        this.chats.splice(this.chats.indexOf(Chat), 1);
        // this.updateMessage();
    }

    add(Chat: ChatI){
        this.chats.push(Chat);
        // this.updateMessage();
    }
    
}

export class remoteChatStore extends chatStore{
    private socket!: Socket;

    constructor(){
        super();
        this.socket = io('http://localhost:8080', {reconnection: false});
        this.socket.on("chats", (updatedChats: ChatI)=>{
            this.chats.push(updatedChats);
            console.log(updatedChats);
        });
    }

    sendChat(chat: ChatI){
        this.socket.emit("send-chats", chat);

    }

}