import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomColors]'
})
export class CustomColorsDirective {

  constructor(private target: ElementRef) {
    const color = `rgb(${this.rgbColor()}, ${this.rgbColor()}, ${this.rgbColor()})`
    this.target.nativeElement.style.backgroundColor = color;
  }
  
  private rgbColor() {
    return Math.floor(Math.random() * 256)
  }
}
