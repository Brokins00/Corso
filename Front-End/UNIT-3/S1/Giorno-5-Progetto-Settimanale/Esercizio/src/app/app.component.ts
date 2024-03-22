import { Component } from '@angular/core';
import { ParametriService } from './services/parametri.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private parametri: ParametriService) {}

  iHaveToShow():boolean {
    return this.parametri.name === undefined;
  }
}
