import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() post!: Post;
  @Input() button: boolean = false;
}
