import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/models/brand.interface';
import { FetchsService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  brands!: Brand[];
  private sub!: Subscription;
  constructor(private fetchs: FetchsService) {}
  ngOnInit() {
    this.sub = this.fetchs.responseChange.subscribe((response) => {
      this.brands = response.brands;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
