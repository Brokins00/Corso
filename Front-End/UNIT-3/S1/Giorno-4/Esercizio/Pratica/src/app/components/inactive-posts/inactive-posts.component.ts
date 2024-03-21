import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts!: Post[];
  bestPost!: Post;
  isLoaded = false;

  ngOnInit(): void {
    this.getPosts().then((data) => {
      this.posts = data.filter((value) => !value.active)
      this.isLoaded = true
    })
  }

  async getPosts():Promise<Post[]>{
    let query = await fetch('assets/db.json')
    let response:Post[] = await query.json();
    return response
  }
}
