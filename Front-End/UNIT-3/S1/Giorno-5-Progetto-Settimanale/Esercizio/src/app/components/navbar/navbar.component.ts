import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/models/brand.interface';
import { FetchsService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private sub!:Subscription;
  brands!: Brand[];

  constructor(private fetchs: FetchsService) {}
  ngOnInit() {
    this.sub = this.fetchs.responseChange.subscribe((response) => {
      this.brands = response.brands;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
