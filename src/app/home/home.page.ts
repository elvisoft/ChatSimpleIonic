import { Component, ViewChild  } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild("content",null) content: any;
  username: string="";
  message: string="";
  messages=[];
  constructor() {
    this.getMessages();
  }

  getMessages(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.on("value", (snap)=>{
      var data = snap.val();
      this.messages=[];
      for(var key in data){
        this.messages.push(data[key]);
      }
      
    });
  }

 

  sendMessages(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, nombre: this.username });
    this.message = "";
  }

}
