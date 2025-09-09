import { Directive, HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';
@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {
  constructor() { }
  @HostBinding('style.backgroundColor') bgcolor = ''
  @HostBinding('class.active') isActive = false;
  @HostBinding('class.active1') isActive1 = false;
  @HostBinding('attr.disabled') isDisabled = false

  @HostListener('mouseover') onMouseOver() {
    console.log("mouse over");
    this.isActive1 = true
    this.isActive = true
    this.bgcolor = 'green';
    this.isDisabled = true
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log("mouse leave");
    this.bgcolor = '';
    this.isActive1 = false
    this.isActive = false
  }
}
