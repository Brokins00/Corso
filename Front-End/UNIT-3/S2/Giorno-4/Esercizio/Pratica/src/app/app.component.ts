import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FetchsService } from './service/fetchs.service';
import { Photo } from './interface/photo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Pratica';
  isLoaded = false;
  photos: Photo[] = [];
  sub!: Subscription;

  constructor(private fetchs: FetchsService) {}

  ngOnInit(): void {
    this.sub = this.fetchs.getPhotos().subscribe((res) => {
      this.photos = res;
      if (this.photos.length > 2500) {
        this.isLoaded = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
