import { Component } from '@angular/core';

@Component({
  selector: 'app-prt-006',
  templateUrl: './prt.006.component.html'
})
export class Prt006Component {
  currentName:string  = 'N.A.';
  currentValue:string = 'N.A.';

  traceMe(event:Event) {
    this.currentName  = (<HTMLInputElement>event.target).name;
    this.currentValue = (<HTMLInputElement>event.target).value;
  }
}
