import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../interface/cart.interface';
import { CartProduct } from '../interface/cart-product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  urlCart = "https://dummyjson.com/carts/"
  urlUser = "https://dummyjson.com/users/"
  _cart!: Cart;
  cart: Subject<Cart> = new Subject()
  constructor(private http: HttpClient) {
    this._cart = {
      products: [],
      total: 0,
      discountedTotal: 0,
      totalProducts: 0,
      totalQuantity: 0
    }
    this.cart.next(this._cart)
  }

  private updateCart() {
    let total = 0;
    let totalProducts = this._cart.products.length;
    let totalQuantity = 0;
    this._cart.products.forEach(element => {
      total += element.price * element.quantity;
      totalQuantity += element.quantity;
    });
    this._cart.total = total;
    this._cart.totalProducts = totalProducts;
    this._cart.totalQuantity = totalQuantity;
    this.cart.next(this._cart)
  }

  addToCart(product:CartProduct) {
    let index = this._cart.products.length ? this._cart.products.findIndex((element) => element.id === product.id) : -1
    if (index >= 0) {
      this._cart.products[index].quantity += 1
      this._cart.products[index].total = product.price * this._cart.products[index].quantity;
    } else {
      this._cart.products.push(product)
    }
    this.updateCart()
  }
}
