import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@IonicPage()

@Component({
  selector: 'page-about',
  templateUrl: 'about.page.html'
})
export class AboutPage {

  barcodeResult: BarcodeScanResult;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  constructor(
    public authService: AuthService,
    public barcodeScanner: BarcodeScanner,
    public navCtrl: NavController
  ) {}

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