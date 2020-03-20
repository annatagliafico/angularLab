import { Component } from '@angular/core';

@Component({
  selector: 'app-prt-008',
  templateUrl: './prt.008.component.html'
})
export class Prt008Component
{
  showTable: boolean = true;
  
  products = [
    ['000102', 'Prodotto A', 'Descrizione prodotto A'],
    ['000103', 'Prodotto B', 'Descrizione prodotto B'],
    ['000104', 'Prodotto C', 'Descrizione prodotto C']
  ];

  toggleTable()
  {
    if (this.showTable) this.showTable = false;
    else                this.showTable = true;
  }
}
