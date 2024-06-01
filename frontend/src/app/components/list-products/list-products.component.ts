import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];
  loading: Boolean = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this._productService.getProducts().subscribe((data) => {
      this.listProducts = data;
    });

    this.loading = false;
  }

}
