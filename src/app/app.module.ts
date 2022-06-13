import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {RoundedButtonModule} from "./shared/rounded-button/rounded-button.module";
import {BackgroundModule} from "./shared/background/background.module";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RoundedButtonModule,
    BackgroundModule,
    HttpClientModule
  ],
  providers: [AuthService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
