import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector : '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    
    //primo modo : accedere direttamente agli elementi (componente creato manualmente)
    constructor(private elementRef : ElementRef){}

    ngOnInit()
    {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}