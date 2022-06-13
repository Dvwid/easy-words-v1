import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {BackgroundModule} from "../shared/background/background.module";
import {RoundedButtonModule} from "../shared/rounded-button/rounded-button.module";
import {FormsModule} from "@angular/forms";
import {ValidationModule} from "../shared/validation/validation.module";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    BackgroundModule,
    RoundedButtonModule,
    FormsModule,
    ValidationModule
  ]
})
export class RegisterModule {
}
