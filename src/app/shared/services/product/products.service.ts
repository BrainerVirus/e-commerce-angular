import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../../types/product.ds';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private uri = 'https://api.escuelajs.co/api/v1/products';
  constructor(private http: HttpClient) {}

  fetchData(): Observable<Product[]> {
    console.log(
      'this.http.get<Product[]>(this.uri)',
      this.http.get<Product[]>(this.uri)
    );
    return this.http.get<Product[]>(this.uri);
  }
}
