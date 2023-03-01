import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

   message: string;
   password: string ;

   decryptPassword: string ;


   encryptedMessage: string = 'No Message';
   decryptedMessage: string = 'No Message';

  ngOnInit(): void {}

  encrypt() {
    this.encryptedMessage = CryptoJS.AES.encrypt(
      this.message.trim(),
      this.password.trim()
    ).toString();

    this.decryptedMessage = 'click on decrypt to view message'
  }

  decrypt(){

    if(this.decryptPassword !== this.password ){
      window.alert('Enter proper password')
    }else{
      this.decryptedMessage = CryptoJS.AES.decrypt(
        this.encryptedMessage,
        this.decryptPassword.trim()
      ).toString(CryptoJS.enc.Utf8);
    }


  }
}
