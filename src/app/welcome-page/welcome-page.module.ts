import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WelcomePageRoutingModule} from './welcome-page-routing.module';
import {WelcomePageComponent} from './welcome-page.component';
import {RoundedButtonModule} from "../shared/rounded-button/rounded-button.module";
import {BackgroundModule} from "../shared/background/background.module";



@NgModule({
  declarations: [
    WelcomePageComponent,
  ],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    RoundedButtonModule,
    BackgroundModule
  ]
})
export class WelcomePageModule {
}
