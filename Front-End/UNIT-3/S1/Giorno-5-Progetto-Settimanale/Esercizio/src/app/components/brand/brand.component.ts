import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand.interface';
import { BaseDati } from 'src/app/models/base-dati.interface';
import { Subscription } from 'rxjs';
import { BrandCars } from 'src/app/models/brand-cars.interface';
import { FetchsService } from 'src/app/services/fetch.service';
import { ParametriService } from 'src/app/services/parametri.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit, OnDestroy {
  isLoaded:boolean = false;
  brand!: Brand;
  href!: string;
  brandCars!: BrandCars[];
  private sub:Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router, private fetchs: FetchsService, private parametri: ParametriService) {}

  ngOnInit() {
    let route = this.route.params.subscribe(params => {
      this.href = params["id"]
      this.parametri.name = params["name"]
      let fetch = this.fetchs.responseChange.subscribe((response) => {
        if (response.brandCars.length == 0 || response.brands.length == 0) {
          this.isLoaded = false;
          return
        }
        let brand = response.brands.find((brand) => brand.href == this.href);
        if (!brand) {
          this.router.navigate(['/'])
          return
        }
        this.brand = brand;
        this.brandCars = response.brandCars.filter((element) => {
          return element.brand.toLowerCase().replace(/\s/g, '') == this.brand.name.toLowerCase().replace(/\s/g, '')
        })
        for (let car of this.brandCars) {
          car.href = car.name.toLowerCase().replace(/\s/g, '')
        }
        this.isLoaded = true
      })
      this.sub.add(fetch)
    })
    this.sub.add(route)
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
