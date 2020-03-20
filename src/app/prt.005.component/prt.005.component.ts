import { Component } from '@angular/core';

@Component({
  selector: 'app-prt-005',
  templateUrl: './prt.005.component.html'
})
export class Prt005Component {
  idx: number = 0;
  products = [
    ['000102', 'Prodotto A', 'Descrizione prodotto A'],
    ['000103', 'Prodotto B', 'Descrizione prodotto B'],
    ['000104', 'Prodotto C', 'Descrizione prodotto C']
  ];

  changeIndex(ctr: number) {
    let max: number = this.products.length - 1;
    if      (this.idx === 0   && ctr === -1) this.idx = max;
    else if (this.idx === max && ctr ===  1) this.idx = 0;
    else                                     this.idx = this.idx + ctr;
  }
}
