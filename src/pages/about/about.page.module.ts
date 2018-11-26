import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AboutPage } from './about.page';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2'
import { QrcodeService } from '../../providers/qrcode/qrcode.service';

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    ComponentsModule,
    HttpClientModule,
    IonicPageModule.forChild(AboutPage),
    NgxQRCodeModule
  ],
  providers: [
    QrcodeService
  ]
})
export class AboutPageModule {}
