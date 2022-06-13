import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './validation.component';



@NgModule({
    declarations: [
        ValidationComponent
    ],
    exports: [
        ValidationComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ValidationModule { }
