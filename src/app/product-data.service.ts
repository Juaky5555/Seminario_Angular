import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './products-list/Product';

const URL = 'https://6863f02c88359a373e96ef6c.mockapi.io/products';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {

  constructor(private http: HttpClient) { }

  //Consume la api y devuelve un Observable
  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL)
            .pipe(
              tap((products: Product[]) => products.forEach(product => product.quantity = 0))
            );
  }
}
