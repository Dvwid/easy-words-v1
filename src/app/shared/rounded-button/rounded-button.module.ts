import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoundedButtonComponent} from "./rounded-button.component";
import {SpinnerModule} from "../spinner/spinner.module";


@NgModule({
  declarations: [RoundedButtonComponent],
  exports: [RoundedButtonComponent],
  imports: [
    CommonModule,
    SpinnerModule
  ]
})
export class RoundedButtonModule {
}
