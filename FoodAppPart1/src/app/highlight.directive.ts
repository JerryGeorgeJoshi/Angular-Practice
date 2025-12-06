import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef, private render:Renderer2) { }
    @HostListener('mouseenter') onMouseEnter(){
      this.render.setStyle(this.el.nativeElement,'backgroundColor','#FD625E')
    }
    @HostListener('mouseleave') onmouseleave(){
      this.render.removeStyle(this.el.nativeElement,'backgroundColor')
    }
  

}
