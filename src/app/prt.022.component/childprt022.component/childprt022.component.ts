import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../prt.022.component';

@Component({
    selector : 'app-childprt022',
    template : '<div></div>'
})
export class ChildPrt022Component implements OnDestroy
{
    subscription : Subscription;

    constructor(private s: SharedService)
    {
        this.subscription = s.child.subscribe(
            data => {
                console.log('child: ', data);
            }
        );
    }

    ngOnDestroy()
    {
        this.subscription.unsubscribe();
    }
}