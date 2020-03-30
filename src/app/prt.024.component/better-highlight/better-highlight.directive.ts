import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {    
    @Input() defaultColor : string = 'transparent';
    // @Input() highligthColor : string = 'blue';
    @Input('appBetterHighlight') highligthColor : string = 'blue';
    @HostBinding ('style.backgroundColor') backgroundColor : string = this.defaultColor;

    // creato da terminale con ng g d (directive) nomeDirettiva
    // secondo modo
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    // creiamo una direttiva statica
    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }

    // creiamo una direttiva reattiva
    @HostListener('mouseenter') mouseover(eventData : Event)  //è come quando ascolti un listener di click
    {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highligthColor;
    }

    @HostListener('mouseleave') mouseleave(eventData : Event)
    {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
