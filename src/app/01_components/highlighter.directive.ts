import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ngrHighlighter]'
})
export class HighlighterDirective {
  private isHighlighted = false;
  constructor() {}

  @HostBinding('class.highlighter')
  get shouldHighlight() {
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.isHighlighted = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.isHighlighted = false;
  }
}
