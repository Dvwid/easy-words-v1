import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthDto, LoginRequest, RegisterRequest, UserDto} from "../dtos";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService implements OnInit {

  private readonly baseUrl = 'https://easy-words-v1.herokuapp.com';
  private currentUser = {} as UserDto;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
  }

  signUp(req: RegisterRequest): Observable<RegisterRequest> {
    return this.http.post<RegisterRequest>(`${this.baseUrl}/users/register`, req);
  }

  login(req: LoginRequest): Observable<AuthDto> {
    return this.http.post<AuthDto>(`${this.baseUrl}/users/login`, req);
  }

  verify(bearer: string): Observable<UserDto> {
    return this.http.post<UserDto>(`${this.baseUrl}/verifyUser`, {bearer});
  }

  setCurrentUser(auth: AuthDto) {
    this.currentUser = auth?.user;
    localStorage.setItem("Auth-Token-EW", auth?.jwt);
  }

  getCurrentUser(): UserDto {
    return this.currentUser;
  }

  logoutUser() {
    this.currentUser = {} as UserDto;
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
