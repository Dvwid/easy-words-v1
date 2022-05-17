import { Component, OnInit } from '@angular/core';
import {slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation} from "angular-animations";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    slideInUpOnEnterAnimation({anchor: 'enter-main', duration: 500, translate: '70vh'}),
    slideOutDownOnLeaveAnimation({anchor: 'leave-main', duration: 500, translate: '100vh'})
  ]
})
export class RegisterComponent implements OnInit {
  isRegisterSectionVisible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
