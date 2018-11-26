import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { ScannedCandidatePage } from './scanned-candidate.page';

@NgModule({
  declarations: [
    ScannedCandidatePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScannedCandidatePage),
  ],
})
export class ScannedCandidatePageModule {}
