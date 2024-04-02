import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormDrivenComponent } from './components/form-driven/form-driven.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'login',
    component: FormDrivenComponent
  },
  {
    path: 'register',
    component: FormReactiveComponent
  },
  {
    path: "**",
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormReactiveComponent,
    FormDrivenComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
