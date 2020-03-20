import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductClientService
{
    API_URL: string = "/api/";

    constructor(private http: HttpClient) { }

    getProducts()
    {
        return this.http.get(this.API_URL + 'products')
    }

    getProduct(productId)
    {
        return this.http.get(`${ this.API_URL + 'products' }/${ productId }`)
    }
}
