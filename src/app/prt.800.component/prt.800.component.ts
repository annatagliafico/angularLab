import { Component } from '@angular/core';

@Component({
  selector: 'app-prt-800',
  templateUrl: './prt.800.component.html'
})
export class Prt800Component {
  doSomething(x:string, y:string, z:string) {
    console.log('x=' + x);
    console.log('y=' + y);
    console.log('z=' + z);
  }
}