import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interface/cart.interface';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart!:Cart;
  subCart!:Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subCart = this.cartService.cart.subscribe((element) => {
      this.cart = element
    })
  }

  ngOnDestroy(): void {
    this.subCart.unsubscribe()
  }
}
