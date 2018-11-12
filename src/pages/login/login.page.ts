import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  loader:any = this.createLoader();

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

   }

  login() {    
    this.loader ? this.loader.present().then(()=> {
      if(this.username == 'projeto' && this.password == '123456'){
        this.navCtrl.setRoot('TabsPage');
      }else{
        if(this.loader){ 
          this.loader.dismiss();
          this.loader = this.createLoader();
        }
        this.showAlert('Falha ao autenticar', 'Usuário ou Senha incorreto');
      }
    }) : this.loader = this.createLoader();
  }

  showAlert(title, message) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  createLoader() {
    return this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
  }

  goRegister() {
    this.navCtrl.push('RegisterPage');
  }
}
