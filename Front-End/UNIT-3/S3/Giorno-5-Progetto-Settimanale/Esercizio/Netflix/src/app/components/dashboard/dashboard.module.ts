import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbRatingModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from './details/details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DetailsComponent,
    FavoritesComponent,
    UsersComponent,
    ProfileComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbDropdownModule,
    NgbCarouselModule,
    NgbRatingModule
  ]
})
export class DashboardModule { }
