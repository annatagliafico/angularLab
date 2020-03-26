import { Component, ViewChild} from '@angular/core';
import { ChildComponent } from './child.component/child.component';

@Component({
    selector: 'app-prt-020',
    templateUrl: './prt.020.component.html'
})
export class Prt020Component
{
    @ViewChild(ChildComponent,{static: false}) child : ChildComponent;

    constructor(){}

    call(){
        this.child._alert('Hello');
    }

}