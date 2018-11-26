import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AngularFireStorage } from 'angularfire2/storage';
import { Camera } from '@ionic-native/camera';
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
    AngularFireStorage,
    Camera
  ]
})
export class UserProfilePageModule {}
