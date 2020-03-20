import { Component, OnInit } from '@angular/core';
import { ProductClientService } from '../product-client.service';
import { Product } from '../prt.010.component/product.model';

@Component({
    selector: 'app-prt-011',
    templateUrl: './prt.011.component.html'
})
export class Prt011Component implements OnInit
{
    products: any[] = [];
    // products: Product[] = [];

    constructor(private productSrvc: ProductClientService) { }

    ngOnInit()
    {
        this.productSrvc.getProducts().subscribe(
            (data: any[]) =>
            {
                console.log(data);
                this.products = data;
            }
        )
    }
}
/*
    IMPORTANT: to make this component work you need to run this command in the terminal
    -----------------------------------------------------------------------------------
            npm install --save angular-in-memory-web-api
    -----------------------------------------------------------------------------------
*/