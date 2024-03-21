import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-liked-posts',
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.scss']
})
export class LikedPostsComponent {
    @Input() posts!:Post[]
}
