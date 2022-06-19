import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation} from "angular-animations";
import {UserDto, WordDto} from "../dtos";
import {WordsService} from "../services/words.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss'],
  animations: [
    slideInUpOnEnterAnimation({anchor: 'enter-main', duration: 500, translate: '70vh'}),
    slideOutDownOnLeaveAnimation({anchor: 'leave-main', duration: 500, translate: '100vh'})
  ]
})
export class FlashcardsComponent implements OnInit {

  @ViewChild('card') card: ElementRef;

  user: UserDto;
  words: WordDto[] = [];
  selectedWord = {} as WordDto;
  flip = false;

  constructor(private wordsService: WordsService,
              private auth: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();
    if (!this.user.id) {
      // this.router.navigate(['/login']);
      return;
    }
    this.getRandomWords();
  }

  flipCard() {
    this.flip = !this.flip;
  }

  callToSwitchCardAnimation() {
    this.card.nativeElement.className = 'flip-card flip-card-switch';
    setTimeout(() => {
      this.drawWord();
    }, 500);
    setTimeout(() => {
      this.card.nativeElement.className = 'flip-card';
    }, 1000);
  }

  readWord() {
    const word = new SpeechSynthesisUtterance(this.selectedWord?.en);
    speechSynthesis.speak(word);
  }

  private drawWord() {
    const random = Math.floor(Math.random() * 99);
    this.selectedWord = this.words?.[random];
  }

  private getRandomWords() {
    const bearer = localStorage.getItem('Auth-Token-EW');
    if (!bearer) {

      return;
    }
    this.wordsService.getRandomWords(100, bearer).subscribe((data: WordDto[]) => {
      this.words = data;
      this.drawWord();
    })
  }


}
