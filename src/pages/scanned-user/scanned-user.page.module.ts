import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { ScannedUserPage } from './scanned-user.page';

@NgModule({
  declarations: [
    ScannedUserPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScannedUserPage)
  ],
})

export class ScannedUserPageModule {}
