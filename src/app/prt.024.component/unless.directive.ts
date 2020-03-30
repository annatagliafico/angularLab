import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector : '[appUnless]'
})

export class UnlessDirective {
    // viene eseguito ogni volta che la proprietà cambia
    @Input() set appUnless(condition : boolean)
    {
        if(!condition)
        {
            // createEmbeddedView crea una vista in questo contenitore
            this.vcRef.createEmbeddedView(this.templateRef);
        }
        else
        {
            // clear rimuove tutto da questo posto nel DOM
            this.vcRef.clear();
        }
    }

    constructor(private templateRef : TemplateRef<any>, private vcRef : ViewContainerRef){}
}