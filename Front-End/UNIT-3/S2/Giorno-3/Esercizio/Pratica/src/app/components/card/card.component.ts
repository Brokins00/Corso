import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { CartService } from 'src/app/service/cart.service';
import { FavoritesService } from 'src/app/service/favorites.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product;
  @Input() favorite:boolean = false;

  constructor(private cart:CartService, private fav:FavoritesService) {}
  addCart() {
    this.cart.addToCart({
      id: this.product.id,
      title: this.product.title,
      quantity: 1,
      discountPercentage: this.product.discountPercentage,
      price: this.product.price,
      thumbnail: this.product.thumbnail
    })
  }

  addFavorites() {
    this.favorite = true
    this.fav.addFavorites(this.product)
  }

  removeFavorites() {
    this.favorite = false
    this.fav.removeFavorites(this.product.id)
  }
}
