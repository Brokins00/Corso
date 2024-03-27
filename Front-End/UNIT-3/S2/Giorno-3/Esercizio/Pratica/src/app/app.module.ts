import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CardComponent,
    CartComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
