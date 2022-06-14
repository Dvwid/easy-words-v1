import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {BackgroundModule} from "../shared/background/background.module";
import {RoundedButtonModule} from "../shared/rounded-button/rounded-button.module";


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    BackgroundModule,
    RoundedButtonModule
  ]
})
export class MenuModule { }
