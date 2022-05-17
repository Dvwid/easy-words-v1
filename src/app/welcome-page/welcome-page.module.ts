import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WelcomePageRoutingModule} from './welcome-page-routing.module';
import {WelcomePageComponent} from './welcome-page.component';
import {BackgroundComponent} from "../shared/background/background.component";
import {RoundedButtonComponent} from "../shared/rounded-button/rounded-button.component";


@NgModule({
  declarations: [
    WelcomePageComponent,
    BackgroundComponent,
    RoundedButtonComponent
  ],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
  ]
})
export class WelcomePageModule {
}
