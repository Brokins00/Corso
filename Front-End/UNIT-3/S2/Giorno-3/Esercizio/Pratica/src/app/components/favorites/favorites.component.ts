import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { FavoritesService } from 'src/app/service/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favorites:Product[] = []
  subFav!: Subscription;
  constructor(private fav:FavoritesService) {}

  ngOnInit(): void {
    console.log('inizio')
    this.fav.favoritesSubject.subscribe((res) => {
      console.log(res)
      this.favorites = res
    })
  }

  ngOnDestroy(): void {
    // this.subFav.unsubscribe();
  }
}
