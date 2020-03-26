import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../prt.022.component';

@Component({
    selector : 'app-granchild',
    template : '<div></div>'
})
export class GranChildComponent implements OnDestroy
{
    subscription : Subscription;

    constructor(private s : SharedService)
    {
        this.subscription = s.child.subscribe(
            data => {
                console.log('granchild: ', data);
                this.s.parent.next('Hello Granfather!'); /*risponde tramite un subject differente*/
            }
        );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe(); /*si occupa di sganciare le sottoscrizioni*/
    }
}
