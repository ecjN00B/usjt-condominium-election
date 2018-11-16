import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController, IonicPage, Loading, LoadingController, NavController } from 'ionic-angular';

@IonicPage({
  priority: 'high'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html'
})

export class LoginPage {

  username: string;
  password: string;

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  login() {

    let loading: Loading = this.showLoading("Please wait...");

    if (this.username == 'projeto' && this.password == '123456') {
      this.navCtrl.setRoot('TabsPage');
      loading.dismiss();
    } else {
      loading.dismiss();
      this.showAlert('Authentication Failed', 'User or password invalid');
    }

  }

  private showLoading(message): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: message
    });

    loading.present();

    return loading;
  }

  private showAlert(title: string, message: string): void {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  goRegister() {
    this.navCtrl.push('RegisterPage');
  }
}
