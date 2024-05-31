import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {id: 1, name: "Coca Cola", description:  "Drink whith sugar", price: 1500, stock: 5},
    {id: 2, name: "Pepsi", description:  "Delicious drink", price: 1550, stock: 10}
  ]
}
