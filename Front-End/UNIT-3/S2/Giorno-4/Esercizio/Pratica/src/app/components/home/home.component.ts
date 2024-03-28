import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Photo } from 'src/app/interface/photo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() photos: Photo[] = []
}
