import { Component, ViewChild} from '@angular/core';
import { ChildPrt020Component } from './childprt020.component/childprt020.component';

@Component({
    selector: 'app-prt-020',
    templateUrl: './prt.020.component.html'
})
export class Prt020Component
{
    @ViewChild(ChildPrt020Component,{static: false}) child : ChildPrt020Component;

    constructor(){}

    call(){
        this.child._alert('Hello');
    }

}