import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WordDto} from "../dtos";

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  baseUrl = "https://easy-words-v1.herokuapp.com/words";

  constructor(private auth: AuthService,
              private http: HttpClient) {
  }

  getRandomWords(limit: number, bearer: string): Observable<WordDto[]> {
    return this.http.post<WordDto[]>(`${this.baseUrl}/random`, {
      bearer,
      limit
    })
  }
}
