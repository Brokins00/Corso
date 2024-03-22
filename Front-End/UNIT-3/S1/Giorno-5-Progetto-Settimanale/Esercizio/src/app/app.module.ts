import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":id",
    component: BrandComponent
  },
  {
    path: ":id/:name",
    component: CarComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BrandComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
