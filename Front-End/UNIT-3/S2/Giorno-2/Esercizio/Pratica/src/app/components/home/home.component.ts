import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { OnInit } from '@angular/core';
import { GeneraleService } from 'src/app/service/generale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts!: Post[];
  bestPost!: Post;
  isLoaded = false;
  editMode:boolean = true;
  display: string = 'all';
  tags: string[] = [];
  interested!: Post[];

  constructor(private generale:GeneraleService) {}

  ngOnInit(): void {
    this.generale.getPosts().then((data) => {
      this.posts = data
      for (let i=0; i < this.posts.length; i++) {
        this.posts[i].tags.forEach(element => {
          if (!this.tags.includes(element)) {
            this.tags.push(element)
          }
        })
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
      this.interested = this.generale.interested(4, this.posts)
      this.isLoaded = true
    })
  }

  savePost(i:number, i2:number) {
    this.posts[i2].title = (document.getElementById('title-'+i) as HTMLInputElement).value
    this.posts[i2].body = (document.getElementById('body-'+i) as HTMLInputElement).value
    this.editMode = false
    setTimeout(() => {
      this.editMode = true
    }, 500)
  }

  displayEvent(tag:string) {
    this.display = tag;
    // let spanTags = document.querySelectorAll('#filter span');
    // spanTags.forEach(element => {
    //   if (element.classList.contains('text-bg-primary')) {
    //     element.classList.remove('text-bg-primary')
    //     element.classList.add('text-bg-secondary')
    //   }
    //   if (element.innerHTML == tag.toUpperCase()) {
    //     element.classList.add('text-bg-primary')
    //     element.classList.remove('text-bg-secondary')
    //   }
    // })
  }
}