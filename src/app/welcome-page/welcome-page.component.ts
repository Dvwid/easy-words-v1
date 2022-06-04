import {Component, OnInit} from '@angular/core';
import {
  fadeInUpOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
} from 'angular-animations';
import {AvailableLanguages} from "../dtos";
import {Router} from "@angular/router";


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  animations: [
    fadeInUpOnEnterAnimation({anchor: 'enter-logo', duration: 1000, delay: 100, translate: '30px'}),
    fadeOutOnLeaveAnimation({anchor: 'leave-logo', duration: 1000, delay: 100}),
    slideInUpOnEnterAnimation({anchor: 'enter-main', duration: 500, translate: '70vh'}),
    slideOutDownOnLeaveAnimation({anchor: 'leave-main', duration: 500, translate: '100vh'})
  ]
})
export class WelcomePageComponent implements OnInit {

  isLogoActive = true;
  isWelcomeSectionVisible = false;
  selectedLanguage = '';

  languages: AvailableLanguages[] = [{name: 'en-flag', imageSrc: 'assets/svgs/en-flag.svg'}];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLogoActive = false;
    }, 1500)

    setTimeout(() => {
      this.isWelcomeSectionVisible = true;
    }, 2500)
  }

  selectLanguage(language: AvailableLanguages) {
    this.selectedLanguage = language.name;
  }

  redirect() {
    this.isWelcomeSectionVisible = false;
    setTimeout(() => {
      this._router.navigateByUrl('/register')
    }, 500)
  }
}
