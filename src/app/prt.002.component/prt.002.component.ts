import { Component } from '@angular/core';

@Component({
  selector: 'app-prt-002',
  templateUrl: './prt.002.component.html'
})
export class Prt002Component
{
    products = [
        ['000102', 'Prodotto A', 'Descrizione prodotto A'],
        ['000103', 'Prodotto B', 'Descrizione prodotto B'],
        ['000104', 'Prodotto C', 'Descrizione prodotto C']
    ];
}
