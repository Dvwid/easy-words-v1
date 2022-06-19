import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UserDto} from "../dtos";
import {slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation} from "angular-animations";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    slideInUpOnEnterAnimation({anchor: 'enter-main', duration: 500, translate: '70vh'}),
    slideOutDownOnLeaveAnimation({anchor: 'leave-main', duration: 500, translate: '100vh'})
  ]
})
export class MenuComponent implements OnInit {

  user = {} as UserDto;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();
  }

}
