import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CandidatesPage } from './candidates.page';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from '../../providers/rest/rest.service';

@NgModule({
  declarations: [
    CandidatesPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CandidatesPage),
    HttpClientModule
  ],
  providers: [
    RestService
  ]
})
export class CandidatesPageModule {}
