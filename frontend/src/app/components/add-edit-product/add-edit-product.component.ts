import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css',
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Add ';

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    });

    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Edit ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: Product) => {
      console.log(data);
      this.loading = false;
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      })
    });
  }

  addProduct() {
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    };

    if(this.id!==0){
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/']);
      })
    }

    else {
      this._productService.saveProduct(product).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/']);
      })
    }
  }
}
