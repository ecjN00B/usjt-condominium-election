import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { BarcodeScanResult, BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

@IonicPage()

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.page.html',
})

export class AdminPage {

  barcodeResult: BarcodeScanResult;
  users: Observable<User[]>;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.users = this.userService.users;
  }

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public barcodeScanner: BarcodeScanner,
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    public userService: UserService
  ) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
      });
    }

  onGetBarcode(): void {
    this.barcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        this.barcodeResult = barcodeResult;
        if(barcodeResult.cancelled == false) {
          if(barcodeResult.format != "QR_CODE")
            this.showAlert(`Error`, `Invalid Format`);
          else {            
            this.userService.findUser(barcodeResult.text)
            .then((user) => {
              if(user){
                this.showAlert(`Success`,
                `
                Content:<br>
                Name: ${user.name}<br>
                Email: ${user.email}<br>
                Username: ${user.username}<br>
                Photo: ${user.photo || ''}<br>
                `);
              }
            }).catch((err) => {
              this.showAlert(`Error`, `Invalid user`);
            });            
          }

        }
      }).catch((err) => {      
        console.log(err);
      })
  }

  onSelectUser(user) {
    console.log(user);
  }

  private showAlert(title: string, message: string): void {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}
