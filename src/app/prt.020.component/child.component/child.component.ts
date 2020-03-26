import { Component} from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl : './child.component.html'
})
export class ChildComponent
{
    test : string = 'test';

    constructor(){}

    _alert(str : string){
        alert(str);
    }

}