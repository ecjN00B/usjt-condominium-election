import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AdminPage } from './admin.page';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { QrcodeService } from '../../providers/qrcode/qrcode.service';

@NgModule({
  declarations: [
    AdminPage,
  ],
  imports: [
    ComponentsModule,
    HttpClientModule,
    IonicPageModule.forChild(AdminPage)
  ],
  providers: [
    QrcodeService
  ]
})
export class AdminPageModule {}
