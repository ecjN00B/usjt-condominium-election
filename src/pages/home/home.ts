import { Component, ViewChild, Input, Directive } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

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
    this.navCtrl.push('GraphicsPage');
    console.log("username: " + this.username);
    console.log("password: " + this.password);
  }
  goRegister() {
    this.navCtrl.push('RegisterPage');
  }
}
