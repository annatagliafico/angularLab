import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-prt-010',
  templateUrl: './prt.010.component.html'
})
export class Prt010Component implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    let prd001: Product = new Product(10, 'primo prodotto', 'descrizione primo prodotto');
    let prd002: Product = new Product(20, 'secondo prodotto', 'descrizione secondo prodotto');
    let prd003: Product = new Product(30, 'terzo prodotto', 'descrizione terzo prodotto');
    this.products.push(prd001);
    this.products.push(prd002);
    this.products.push(prd003);
  }

}
