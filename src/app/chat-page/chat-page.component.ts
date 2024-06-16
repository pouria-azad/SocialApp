import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ChatI } from '../chat-i';
import { FormsModule } from '@angular/forms';

import { remoteChatStore } from '../remote-chat-store';
@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
  providers: [remoteChatStore]
})
export class ChatPageComponent {

messageStore : remoteChatStore;
newChatText = '';

constructor(messageStore: remoteChatStore){
  this.messageStore = messageStore;
}

DeleteChat(chat : ChatI){
  this.messageStore.remove(chat)
}

SendChat(){
  if (this.newChatText.trim().length){
    let chat : ChatI = {
      id: this.messageStore.getLatestChatId() + 1,
      content: this.newChatText,
      date: new Date(),
      status: false,
      sender: 'me',
    }
    // console.log(this.messageStore.getLatestChatId());
    this.messageStore.add(chat);
    this.messageStore.sendChat(chat)
    this.newChatText = '';
  }
}


}
