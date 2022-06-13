import {Component} from '@angular/core';
import {LoginRequest} from "../dtos";
import {slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation} from "angular-animations";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    slideInUpOnEnterAnimation({anchor: 'enter-main', duration: 500, translate: '70vh'}),
    slideOutDownOnLeaveAnimation({anchor: 'leave-main', duration: 500, translate: '100vh'})
  ]
})
export class LoginComponent {


  loginRequest = {} as LoginRequest;
  isLoggingIn = false;
  errorMessage: string;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  signIn() {
    this.isLoggingIn = true;
    this.auth.login(this.loginRequest)
      .pipe(
        finalize(() => this.isLoggingIn = false)
      )
      .subscribe(data => {
          this.auth.setCurrentUser(data);
          this.router.navigate(['/menu'])
        },
        (res) => {
          this.errorMessage = res?.error;
        }
      )
  }
}
