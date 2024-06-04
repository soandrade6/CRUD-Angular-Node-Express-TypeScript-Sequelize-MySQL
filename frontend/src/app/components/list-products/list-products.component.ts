import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];
  loading: Boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this._productService.getProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
      this.loading = false;
    });

    
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProdcut(id).subscribe(() => {
      this.getProducts();
      // this.toastr.warning("Deleted sucessful", "Product deleted")
    });
    
  }
}
