import { Component } from '@angular/core';
import { AlertController, IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../providers/auth/auth.service';
import { BaseService } from '../../providers/base/base.service';
import { UserService } from '../../providers/user/user.service';

import * as firebase from 'firebase/app'

@IonicPage({
  defaultHistory: ['LoginPage']
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.page.html',
})

export class RegisterPage extends BaseService {

  signupForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {
    super();
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit():void {

    let loading: Loading = this.showLoading("Cadastrando...");
    let formUser = this.signupForm.value;

    this.authService.createAuthUser({
      email: formUser.email,
      password: formUser.password 
    }).then((authUser: firebase.User) => {

      delete formUser.password;
      delete formUser.repassword;
      let uuid:string = authUser["user"].uid;

      this.userService.create(formUser, uuid)
      .then(()=>{
        console.log('Cadastrado');
        loading.dismiss();
      }).catch((error: any) => {
        loading.dismiss();
        this.showAlert(error);
      });
    }).catch((error: any) =>{
      loading.dismiss();
      this.showAlert(error);
    });   
  }

  private showLoading(message): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: message
    });

    loading.present();

    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

 
}