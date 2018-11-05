import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage({
  priority: 'high',
  defaultHistory: ['TabsPage']
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  username: string;
  password: string;
  constructor(public navCtrl: NavController) { }
  login() {
    console.log(this.username + " - " + this.password);
    if(this.username == 'projeto' && this.password == '123')
      this.navCtrl.parent.select(3);
    else
      alert('Senha ou usuário inválidos');    
  }
  goRegister() {
    this.navCtrl.push('RegisterPage');
  }
}
