import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interface/cart.interface';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!:Cart;
  subCart!:Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subCart = this.cartService.getCart().subscribe((res) => {
        console.log(res)
        this.cart = res
      })
    }, 5000)
  }
}
