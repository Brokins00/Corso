import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrandCars } from 'src/app/models/brand-cars.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ParametriService } from 'src/app/services/parametri.service';
import { FetchsService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy {
  isLoaded:boolean = false;
  href!: string;
  car!: BrandCars;
  private sub:Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private parametri: ParametriService, private fetchs: FetchsService) {
    
  }

  ngOnInit() {
    let route = this.route.params.subscribe(params => {
      this.href = params["name"]
      this.parametri.name = params['name']
      let sub2 = this.fetchs.responseChange.subscribe((response) => {
        for (let element of response.brandCars) {
          if (element.name.toLowerCase().replace(/\s/g, '') == this.href) {
            this.car = element;
            break
          }
        }
        if (this.car) {
          this.isLoaded = true;
        }
      })
      this.sub.add(sub2)
    })
    this.sub.add(route)
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
