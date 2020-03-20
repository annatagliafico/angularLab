import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-prt-009',
  templateUrl: './prt.009.component.html'
})
export class Prt009Component implements OnInit
{
  prd001: Product = new Product(10, 'primo prodotto', 'descrizione primo prodotto');
  prd002: Product = new Product(20, 'secondo prodotto', 'descrizione secondo prodotto');

  constructor() { }

  ngOnInit() {
  }
}
