import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController, IonicPage, Loading, LoadingController, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';

@IonicPage({
  priority: 'high'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html'
})

export class LoginPage {

  email: string;
  password: string;

  loginForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  login() {

    let loading: Loading = this.showLoading("Please wait...");

    this.authService.loginWithEmail(this.loginForm.value)
      .then((isLogged: boolean) => {
        if (isLogged) {
          this.navCtrl.setRoot('TabsPage');
          loading.dismiss();
        } else {
          loading.dismiss();
          this.showAlert('Authentication Failed', 'User or password invalid');
        }
      }).catch((error: any) => {
        this.showAlert('Authentication Failed', error);
        loading.dismiss();
      });

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
