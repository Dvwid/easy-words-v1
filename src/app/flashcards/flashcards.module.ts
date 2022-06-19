import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashcardsRoutingModule } from './flashcards-routing.module';
import { FlashcardsComponent } from './flashcards.component';
import {SpinnerModule} from "../shared/spinner/spinner.module";


@NgModule({
  declarations: [
    FlashcardsComponent
  ],
  imports: [
    CommonModule,
    FlashcardsRoutingModule,
    SpinnerModule
  ]
})
export class FlashcardsModule { }
