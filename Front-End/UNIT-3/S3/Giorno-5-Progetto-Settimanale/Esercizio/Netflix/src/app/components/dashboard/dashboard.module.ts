import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbRatingModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DetailsComponent
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
