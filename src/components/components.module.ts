import { NgModule } from '@angular/core';

import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { SocialCardComponent } from './social-card/social-card.component';

import { IonicModule } from 'ionic-angular';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
	declarations: [
        CustomHeaderComponent,
        ProgressBarComponent,
        SocialCardComponent
    ],
	imports: [IonicModule],
	exports: [
        CustomHeaderComponent,
        ProgressBarComponent,
        SocialCardComponent
    ]
})

export class ComponentsModule {}