import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {

  @Input() field: any;
  @Input() submitted: boolean;
  @Input() text: string;

  isInvalid() {
    return this.submitted && ((this.field && this.field.invalid));
  }
}
