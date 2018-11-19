import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user/user.service';

@IonicPage()

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.page.html',
})
export class UserProfilePage {

  private editIconName: string = "lock"
  private editIconUsername: string = "lock"
  private editIconEmail: string = "lock"

  private inputNameDisabled: boolean = true;
  private inputUsernameDisabled: boolean = true;
  private inputEmailDisabled: boolean = true;

  private name: string;
  private username: string;
  private email: string;
  private filePhoto: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {
  }

  ionViewDidLoad(): void {
    this.name = this.navParams.data.name;
    this.username = this.navParams.data.username;
    this.email = this.navParams.data.email;
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.filePhoto) {
      this.userService.uploadPhoto(this.filePhoto, this.navParams.data.$key);
    }
  }

  onPhoto(event): void{
    this.filePhoto = event.target.files[0];
  }

  changeIcon(input: string): void {
    if(input == "name") {
      if (this.editIconName == "lock") {
        this.editIconName = "unlock";
        this.inputNameDisabled = false;
      } else {
        this.editIconName = "lock";
        this.inputNameDisabled = true;
      }
    }else if(input == "username") {
      if (this.editIconUsername == "lock") {
        this.editIconUsername = "unlock";
        this.inputUsernameDisabled = false;
      } else {
        this.editIconUsername = "lock";
        this.inputUsernameDisabled = true;
      }
    } else if(input == "email"){
      if (this.editIconEmail == "lock") {
        this.editIconEmail = "unlock";
        this.inputEmailDisabled = false;
      } else {
        this.editIconEmail = "lock";
        this.inputEmailDisabled = true;
      }
    }
  }

}
