import { NgModule } from '@angular/core';

import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { SocialCardComponent } from './social-card/social-card.component';

import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [SocialCardComponent,
    CustomHeaderComponent],
	imports: [IonicModule],
	exports: [SocialCardComponent,
    CustomHeaderComponent]
})

export class ComponentsModule {}