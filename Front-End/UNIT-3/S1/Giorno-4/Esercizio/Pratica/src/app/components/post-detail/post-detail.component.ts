import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  id!: number;
  post!: Post;
  private sub!:Subscription;
  isLoaded = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
      this.getPost()
    })
  }

  async getPost() {
    let query = await fetch('assets/db.json')
    let response:Post[] = await query.json();
    response.forEach(element => {
        if (element.id == this.id) {
          this.post = element
        }
    });
    this.isLoaded = true;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
