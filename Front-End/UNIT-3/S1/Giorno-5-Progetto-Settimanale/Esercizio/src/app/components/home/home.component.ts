import { Component } from '@angular/core';
import { Brand } from 'src/app/models/brand.interface';
import { BaseDati } from 'src/app/models/base-dati.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  brands!: Brand[];
  async ngOnInit() {
    let query = await fetch('assets/data/db.json');
    let response:BaseDati = await query.json();
    this.brands = response.brands;
  }
}
