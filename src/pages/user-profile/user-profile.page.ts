import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user/user.service';

@IonicPage()

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.page.html',
})
export class UserProfilePage {

  private inputNameDisabled: boolean = true;
  private inputUsernameDisabled: boolean = true;
  private inputEmailDisabled: boolean = true;
  
  private editIconName: string = "lock";
  private editIconUsername: string = "lock";
  private editIconEmail: string = "lock";
  
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

  changeIcon(): void {
    this.editIconName = this.inputNameDisabled ? "lock" : "unlock";
    this.editIconUsername = this.inputUsernameDisabled ? "lock" : "unlock";
    this.editIconEmail = this.inputEmailDisabled ? "lock" : "unlock";
  }

}
