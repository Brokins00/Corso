import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  @Input() bestPost!: Post;
}
