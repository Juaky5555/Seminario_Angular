import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Product[] = [
            {
              "name" : "Alimento para perro cachorro",
              "brand" : "DogChow",
              "price" : 5000,
              "stock" : 299,
              "image" : 'assets/img/young_dog_dogchow.png',
              "clearance" : false,
              "quantity" : 0,
            },
            {
              "name" : "Alimento para perro adulto",
              "brand" : "DogChow",
              "price" : 4500,
              "stock" : 250,
              "image" : 'assets/img/adult_dog_dogchow.jpg',
              "clearance" : true,
              "quantity" : 0,
            },
            {
              "name" : "Alimento para gato cachorro",
              "brand" : "Wiskas",
              "price" : 4500,
              "stock" : 0,
              "image" : 'assets/img/young_cat_wiskas.jpg',
              "clearance" : false,
              "quantity" : 0,
            },
            {
              "name" : "Alimento para gato adulto",
              "brand" : "Wiskas",
              "price" : 3500,
              "stock" : 200,
              "image" : 'assets/img/adult_cat_wiskas.jpg',
              "clearance" : false,
              "quantity" : 0,
            }
          ]

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
}