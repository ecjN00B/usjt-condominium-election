import { Component } from '@angular/core';
import { Alert, AlertController, IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../providers/auth/auth.service';
import { BaseService } from '../../providers/base/base.service';
import { UserService } from '../../providers/user/user.service';

import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';

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

  onSubmit(): void {

    let loading: Loading = this.showLoading("Registering...");
    let formUser = this.signupForm.value;
    let username: string = formUser.username;

    this.userService.userExists(username)
      .pipe(
        first()
      )
      .subscribe((userExists: boolean) => {

        if (!userExists) {
          this.authService.createAuthUser({
            email: formUser.email,
            password: formUser.password
          }).then((authUser: firebase.User) => {

            delete formUser.password;
            delete formUser.repassword;
            let uuid: string = authUser["user"].uid;

            this.userService.create(formUser, uuid)
              .then(() => {
                let alert = this.showAlert('Successful', 'You have been registered.');
                alert.onDidDismiss(() => {
                  this.navCtrl.setRoot('TutorialPage');
                  loading.dismiss();
                });
              }).catch((error: any) => {
                loading.dismiss();
                this.showAlert(`Register failed`, error);
              });
          }).catch((error: any) => {
            loading.dismiss();
            this.showAlert(`Register failed`, error);
          });
        } else {
          loading.dismiss();
          this.showAlert(`Register failed`, `The username ${username} is already in use`);
        }

      });

  }

  private showLoading(message): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: message
    });

    loading.present();

    return loading;
  }

  private showAlert(title: string, message: string): Alert {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Ok']
    });
    
    alert.present();

    return alert;
  }


}