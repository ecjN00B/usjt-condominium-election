import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { GenericProfileComponent } from './generic-profile/generic-profile.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SocialCardComponent } from './social-card/social-card.component';

@NgModule({
	declarations: [
        CustomHeaderComponent,
        GenericProfileComponent,
        ProgressBarComponent,
        SocialCardComponent
    ],
	imports: [IonicModule],
	exports: [
        CustomHeaderComponent,
        GenericProfileComponent,
        ProgressBarComponent,
        SocialCardComponent
    ]
})

export class ComponentsModule {}