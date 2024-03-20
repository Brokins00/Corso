import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts!: Post[];
  bestPost!: Post;
  isLoaded = false;

  constructor() {
    this.getPosts().then((data) => {
      this.posts = data
      for (let i=0; i < this.posts.length; i++) {
        if (this.posts[i].active) {
          if (!this.bestPost) {
            this.bestPost = this.posts[i]
          } else {
            if (this.posts[i].reactions > this.bestPost.reactions) {
              this.bestPost = this.posts[i]
            }
          }
        }
      }
      this.posts = this.interested(4)
      this.isLoaded = true
    })
  }

  interested(qtty:number): Post[] {
    let count = 0;
    let usciti:number[] = [];
    let array:Post[] = [];
    while (count < qtty) {
      let random = Math.floor(Math.random() * qtty)
      while (usciti.includes(random)) {
        random = Math.floor(Math.random() * qtty)
      }
      usciti.push(random)
      array.push(this.posts[random])
      count++;
    }
    return array;
  }

  async getPosts():Promise<Post[]>{
    let query = await fetch('assets/db.json')
    let response:Post[] = await query.json();
    return response
  }
}
