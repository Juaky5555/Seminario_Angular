import { Injectable } from '@angular/core';
import { Product } from './products-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject <Product[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(product: Product){
    let item = this._cartList.find((v1) => v1.name == product.name);
    if (!item) {
      this._cartList.push({... product});
    } else {
      item.quantity += product.quantity;
    }
    console.log(this._cartList.length);
    this.cartList.next(this._cartList); //equivalente a el emmit de los eventos
  }

}