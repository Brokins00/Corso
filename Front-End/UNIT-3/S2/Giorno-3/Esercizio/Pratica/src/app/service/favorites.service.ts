import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FavoritesService {
    favorites: Product[] = [];
    favoritesSubject = new BehaviorSubject<Product[]>([])
    constructor() {}

    addFavorites(product: Product) {
        this.favorites.push(product);
        console.log('entrato');
        this.favoritesSubject.next(this.favorites);
        console.log(this.favoritesSubject)
    }
    removeFavorites(productId: number) {
        this.favorites.forEach((element, index) => {
            if (element.id == productId) {
                delete this.favorites[index];
            }
        });
        this.favoritesSubject.next(this.favorites);
    }
}
