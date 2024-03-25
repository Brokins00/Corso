import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts!: Post[];
  editMode:boolean = true;

  ngOnInit(): void {
    this.getPosts().then((data) => {
      this.posts = data.filter((value) => !value.active)
    })
  }

  async getPosts():Promise<Post[]>{
    let query = await fetch('assets/db.json')
    let response:Post[] = await query.json();
    return response
  }

  savePost(i:number, i2:number) {
    this.posts[i2].title = (document.getElementById('title-'+i) as HTMLInputElement).value
    this.posts[i2].body = (document.getElementById('body-'+i) as HTMLInputElement).value
    this.editMode = false
    setTimeout(() => {
      this.editMode = true
    }, 500)
  }
}
