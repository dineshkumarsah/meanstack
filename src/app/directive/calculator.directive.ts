import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCalculator]'
})
export class CalculatorDirective implements OnInit{
  name:string="dinesh";
  @Input() defaultColor: string;
  @Input('appCalculator') highlightColor: string;
  constructor(private elemr: ElementRef, private r: Renderer2) {
    r.setStyle(elemr.nativeElement, 'color', 'red')
  }
  ngOnInit(){
    console.log("Default",this.defaultColor,"highlightColor",this.highlightColor);
    
  }
 
}

