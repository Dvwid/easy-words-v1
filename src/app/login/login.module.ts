import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {RoundedButtonModule} from "../shared/rounded-button/rounded-button.module";
import {FormsModule} from "@angular/forms";
import {BackgroundModule} from "../shared/background/background.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RoundedButtonModule,
    FormsModule,
    BackgroundModule
  ]
})
export class LoginModule { }
