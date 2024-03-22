import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrandCars } from 'src/app/models/brand-cars.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BaseDati } from 'src/app/models/base-dati.interface';
import { ParametriService } from 'src/app/services/parametri.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy {
  isLoaded:boolean = false;
  href!: string;
  car!: BrandCars;
  private sub!:Subscription;

  constructor(private route: ActivatedRoute, private parametri: ParametriService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(async params => {
      this.href = params["name"]
      this.parametri.id = params['id']
      this.parametri.name = params['name']
      let query = await fetch('assets/data/db.json');
      let response:BaseDati = await query.json();
      for (let element of response.brandCars) {
        if (element.name.toLowerCase().replace(/\s/g, '') == this.href) {
          this.car = element;
        }
      }

      this.isLoaded = true
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
