import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Easy Words';

  constructor(private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.checkIsUserLogged();
  }

  checkIsUserLogged() {
    const jwt = localStorage.getItem('Auth-Token-EW');
    if (!jwt) {
      return;
    }
    this.auth.verify(jwt).subscribe((user) => {
        this.auth.setCurrentUser({jwt, user});
        if (this.router.url === '/login' ||
            this.router.url === '/register' ||
            this.router.url === '/welcome' ||
            this.router.url === '/') {
          this.router.navigate(['/menu']);
        }
      },
      () => {
        this.router.navigate(['/login']);
      })
  }
}
