import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AdminPage } from './admin.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdminPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdminPage)
  ],
  providers: [
    BarcodeScanner
  ]
})
export class AdminPageModule {}
