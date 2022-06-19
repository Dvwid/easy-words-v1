import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation} from "angular-animations";
import {WordDto} from "../dtos";
import {WordsService} from "../services/words.service";

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


  words: WordDto[] = [];
  selectedWord = {} as WordDto;
  flip = false;

  constructor(private wordsService: WordsService) {
  }

  ngOnInit(): void {
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

  private drawWord() {
    const random = Math.floor(Math.random() * 99);
    this.selectedWord = this.words?.[random];
  }

  private getRandomWords() {
    this.wordsService.getRandomWords(100).subscribe((data: WordDto[]) => {
      this.words = data;
      this.drawWord();
    })
  }


}
