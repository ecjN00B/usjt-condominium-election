import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AngularFireStorage } from 'angularfire2/storage';
import { ComponentsModule } from '../../components/components.module';
import { UserProfilePage } from './user-profile.page';

@NgModule({
  declarations: [
    UserProfilePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(UserProfilePage)
  ],
  providers: [
    AngularFireStorage
  ]
})
export class UserProfilePageModule {}
