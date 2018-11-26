import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2'
import { QrcodeService } from '../../providers/qrcode/qrcode.service';
import { TitlePage } from './title.page';

@NgModule({
  declarations: [
    TitlePage
  ],
  imports: [
    ComponentsModule,
    HttpClientModule,
    IonicPageModule.forChild(TitlePage),
    NgxQRCodeModule
  ],
  providers: [
    QrcodeService
  ]
})

export class TitlePageModule {}