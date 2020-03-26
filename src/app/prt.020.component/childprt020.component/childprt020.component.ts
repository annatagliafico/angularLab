import { Component} from '@angular/core';

@Component({
    selector: 'app-childprt020',
    templateUrl : './childprt020.component.html'
})
export class ChildPrt020Component
{
    test : string = 'test';

    constructor(){}

    _alert(str : string){
        alert(str);
    }

}