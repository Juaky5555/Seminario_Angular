import { Component, Input } from '@angular/core';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-stock-input',
  standalone: false,
  templateUrl: './stock-input.component.html',
  styleUrl: './stock-input.component.scss'
})
export class StockInputComponent {

  @Input()
  product!: Product;

  upQuantity(product: Product): void {
    if(product.quantity < product.stock){
      product.quantity++;
    }
  }

  downQuantity(product: Product): void {
    if(product.quantity > 0){
      product.quantity--;
    }
  }

  checkQuantity(product: Product) {
    if (product.quantity > product.stock) {
      product.quantity = product.stock;
    } else if (product.quantity < 0) {
      product.quantity = 0;
    }
  }
}
