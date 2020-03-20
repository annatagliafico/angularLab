import { Component } from '@angular/core';

@Component({
  selector: 'app-prt-004',
  templateUrl: './prt.004.component.html'
})
export class Prt004Component
{
    idx:number = 0;
    products = [
        ['000102', 'Prodotto A', 'Descrizione prodotto A'],
        ['000103', 'Prodotto B', 'Descrizione prodotto B'],
        ['000104', 'Prodotto C', 'Descrizione prodotto C']
    ];
}
