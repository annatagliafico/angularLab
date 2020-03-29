import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    // creato da terminale con ng g d (directive) nomeDirettiva
    // secondo modo
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }
}
