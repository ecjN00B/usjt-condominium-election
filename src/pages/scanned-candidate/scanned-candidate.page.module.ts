import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from '../../providers/rest/rest.service';
import { ScannedCandidatePage } from './scanned-candidate.page';

@NgModule({
  declarations: [
    ScannedCandidatePage
  ],
  imports: [
    ComponentsModule,
    HttpClientModule,
    IonicPageModule.forChild(ScannedCandidatePage)
  ],
  providers: [
    RestService
  ]
})
export class ScannedCandidatePageModule {}
