import {Component, Input} from '@angular/core';

@Component({
  selector: 'RoundedButton',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss']
})
export class RoundedButtonComponent {

  @Input() width: string;
  @Input() height: string;
  @Input() text: string;
  @Input() disabled: boolean;
  @Input() isLoading: boolean;

}
