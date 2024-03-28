import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/interface/photo.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() photo!: Photo
}
