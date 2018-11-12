import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage({
  defaultHistory: ['LoginPage']
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.page.html',
})

export class RegisterPage {

  signupForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]],
      apt: ['', Validators.required]
    });



  }

 
}
