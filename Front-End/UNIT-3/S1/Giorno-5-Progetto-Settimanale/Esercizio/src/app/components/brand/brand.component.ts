import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand.interface';
import { BaseDati } from 'src/app/models/base-dati.interface';
import { Subscription } from 'rxjs';
import { BrandCars } from 'src/app/models/brand-cars.interface';

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
  private sub!:Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(async params => {
      this.href = params["id"]
      let query = await fetch('assets/data/db.json');
      let response:BaseDati = await query.json();
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
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
