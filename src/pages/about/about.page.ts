import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

import { map } from 'rxjs/operators';

@IonicPage()

@Component({
  selector: 'page-about',
  templateUrl: 'about.page.html'
})
export class AboutPage {

  currentUser: User;

  barcodeResult: BarcodeScanResult;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  constructor(
    public authService: AuthService,
    public barcodeScanner: BarcodeScanner,
    public navCtrl: NavController,
    public userService: UserService
  ) {
    this.getCurrentUser();
  }

  async getCurrentUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.currentUser
        .snapshotChanges()
        .pipe(
          map(action => ({ $key: action.key, ...action.payload.val() }))
        ).subscribe((user: User) => {
          this.currentUser = user;
        });
    });
  }

  onGetBarcode(): void {
    this.barcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        this.barcodeResult = barcodeResult;
        console.log('Result: ' + this.barcodeResult);
      }).catch((err) => {
        console.log(err);
      })
  }

}