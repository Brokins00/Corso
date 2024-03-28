import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchsService {
  private productsUrl='https://dummyjson.com/products/';
  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Products> {
    return this.http.get<Products>(this.productsUrl)
  }
}
