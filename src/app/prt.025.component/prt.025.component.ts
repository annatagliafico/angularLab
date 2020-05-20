import { Component } from '@angular/core';

@Component({
  selector: 'app-prt-025',
  templateUrl: './prt.025.component.html'
})
export class Prt025Component {

    now : Date;
    arr : Array<number> = [1,2,3,4,5,6,7];
    obj: any = {name : 'Mario' , surname : 'Rossi'};
    name : string = 'Carl';

    constructor()
    {
        this.now = new Date();
        console.info(this.now);
    }


}