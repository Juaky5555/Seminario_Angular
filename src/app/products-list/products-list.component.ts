import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  product = {"name" : "Alimento para perro cachorro",
              "brand" : "DogChow",
              "price" : "$5000",
              "stock" : "299",
              "image" : 'assets/img/young_dog_dogchow.png'}
  
}