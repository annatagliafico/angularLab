import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './prt.024.component.html',
  styleUrls: ['./prt.024.component.scss']
})
export class Prt024Component {
  // numbers     = [1, 2, 3, 4, 5];
  oddNumbers  = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd     = false;
  value = 10;
}
