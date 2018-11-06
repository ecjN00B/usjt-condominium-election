import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  priority: 'high'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  username: string;
  password: string;
  constructor(public navCtrl: NavController) { }
  login() {
    console.log(this.username + " - " + this.password);
    if(this.username == 'projeto' && this.password == '123')
      this.navCtrl.setRoot('TabsPage');
    else
      alert('Senha ou usuário inválidos');    
  }
  goRegister() {
    this.navCtrl.push('RegisterPage');
  }
}
