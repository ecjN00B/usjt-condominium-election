import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';

import { AboutPage } from './about.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AboutPage)
  ],
  providers: [
    BarcodeScanner
  ]
})
export class AboutPageModule {}
