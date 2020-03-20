import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
    providedIn: 'root'
})
export class ProductBeMockupService implements InMemoryDbService
{
    constructor() { }

    createDb()
    {
        let products = [
            { id: 1, name: 'product 1 name', description: 'product 1 description' },
            { id: 2, name: 'product 2 name', description: 'product 2 description' },
            { id: 3, name: 'product 3 name', description: 'product 3 description' },
            { id: 4, name: 'product 4 name', description: 'product 4 description' }
        ];
        return { products };
    }
}