import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Chats } from '../chats';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent {

  chat: Chats[]=[
    {
    id: 1,
    content: 'hello',
    date: new Date(),
    status: true,
    sender: 'me',
    },
    {
    id: 2,
    content: 'how are you',
    date: new Date(),
    status: true,
    sender: 'you',
    },
    {
    id: 3,
    content: 'i am pouria',
    date: new Date(),
    status: true,
    sender: 'me',
    },
    {
    id: 4,
    content: 'and you?',
    date: new Date(),
    status: true,
    sender: 'me',
    },
]

message: string = '';

sendMessage(message: string){
  this.chat.push({
    id: ++this.chat[this.chat.length - 1].id,
    content: message,
    date: new Date(),
    status: false,
    sender: 'me'
  })
  console.log(this.chat[this.chat.length-1])
}

handleKeyUp(){
  this.sendMessage(this.message.replace(/\n$/, ''));
  this.message = ""
}



}
