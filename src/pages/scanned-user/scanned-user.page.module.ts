import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ScannedUserPage } from './scanned-user.page';

@NgModule({
  declarations: [
    ScannedUserPage
  ],
  imports: [
    IonicPageModule.forChild(ScannedUserPage)
  ],
})

export class ScannedUserPageModule {}
