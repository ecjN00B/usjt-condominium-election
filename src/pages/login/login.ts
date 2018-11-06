import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  login() {
    console.log(this.username + " - " + this.password);
    if(this.username == 'projeto' && this.password == '123')
      this.navCtrl.setRoot('TabsPage');
    else
      this.showAlert('Falha ao autenticar', 'Usuário ou Senha incorreto');   
  }

  showAlert(title, message) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  goRegister() {
    this.navCtrl.push('RegisterPage');
  }
}
