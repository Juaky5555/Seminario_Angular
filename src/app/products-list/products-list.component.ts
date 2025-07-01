import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})

export class ProductsListComponent {
  products: Product[] = [];

  constructor(
    private cart: ProductCartService,
    private productsDataService: ProductDataService  ){
    }

  addToCart(product: Product){
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  ngOnInit(): void {
    this.productsDataService.getAll()
    .subscribe(products => this.products = products);
  }
}