import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../providers/user/user.service';

@IonicPage({
  defaultHistory: ['LoginPage']
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.page.html',
})

export class RegisterPage {

  signupForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit():void {
    this.userService.create(this.signupForm.value)
      .then(()=>{
        console.log('Cadastrado');
      });
  }

 
}
