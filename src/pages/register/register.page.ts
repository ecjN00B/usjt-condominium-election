import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../providers/user/user.service';
import { AuthService } from '../../providers/auth/auth.service';
import * as firebase from 'firebase/app'


@IonicPage({
  defaultHistory: ['LoginPage']
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.page.html',
})

export class RegisterPage {

  signupForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public userService: UserService, public authService: AuthService) {

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit():void {

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
      });
    });

    
  }

 
}
