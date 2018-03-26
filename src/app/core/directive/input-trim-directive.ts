import {
  Directive, HostBinding, HostListener, ElementRef, Input, EventEmitter, Output,
  Attribute
} from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[inputTextTrim][formControlName],[inputTextTrim][formControl],[inputTextTrim][ngModel]',
})

export class InputTextTrimDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('change')
  onChange() {
      this.control.reset((this.el.nativeElement as HTMLInputElement).value.trim());
  }
}
