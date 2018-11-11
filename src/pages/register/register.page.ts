import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['LoginPage']
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.page.html',
})
export class RegisterPage {
  username:string;
  password:string;
  repassword:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register(){
    if(this.username.length==0 || this.password.length==0 || this.repassword.length==0)
     alert("Por favor complete os campos");
  }
}
