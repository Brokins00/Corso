import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../interface/user.interface';
import { Cart } from '../interface/cart.interface';
import { CartProduct } from '../interface/cart-product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {
  urlCart = "https://dummyjson.com/carts/"
  urlUser = "https://dummyjson.com/users/"
  userId:number = 1;
  subUser!:Subscription;
  subCart!:Subscription;
  cartId: number = 1;
  constructor(private http: HttpClient) {
    this.subUser = this.getNewUser().subscribe((res) => {
      this.userId = res.id
      console.log('Utente creato: ', res)
      if (this.subCart) {
        this.subCart.unsubscribe();
      }
      this.subCart = this.updateCart(this.userId).subscribe()
    })
  }

  private updateCart(id:number) {
    return this.http.put<Cart>(this.urlCart+this.cartId, {
      merge: true,
      userId: id,
      products: []
    })
  }

  private getNewUser():Observable<User> {
    let newUser = {
      firstName: 'Pluto',
      lastName: 'Paperino',
      age: 100
    }
    return this.http.put<User>(this.urlUser+this.userId, newUser)
  }

  getCart():Observable<Cart> {
    return this.http.get<Cart>(this.urlCart+this.cartId)
  }

  addToCart(product:CartProduct) {
    return this.http.put<Cart>(this.urlCart+this.cartId, {
      merge: true,
      products: [
        product
      ]
    })
  }

  ngOnDestroy(): void {
    this.subCart.unsubscribe();
    this.subUser.unsubscribe();
  }
}
