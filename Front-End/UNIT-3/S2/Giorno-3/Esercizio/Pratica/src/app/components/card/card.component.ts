import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnDestroy {
  @Input() product!: Product;
  sub!:Subscription;

  constructor(private cart:CartService) {}
  addCart() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub = this.cart.addToCart({
      id: this.product.id,
      title: this.product.title,
      quantity: 1,
      discountPercentage: this.product.discountPercentage,
      price: this.product.price,
      thumbnail: this.product.thumbnail
    }).subscribe()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
