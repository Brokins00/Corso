import { Component, Input } from '@angular/core';
import { BaseDati } from 'src/app/models/base-dati.interface';
import { Brand } from 'src/app/models/brand.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  brands!: Brand[];
  async ngOnInit() {
    let query = await fetch('assets/data/db.json');
    let response:BaseDati = await query.json();
    this.brands = response.brands;
  }
}
