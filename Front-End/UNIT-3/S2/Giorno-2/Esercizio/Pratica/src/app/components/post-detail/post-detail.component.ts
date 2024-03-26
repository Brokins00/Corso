import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { Subscription } from 'rxjs';
import { GeneraleService } from 'src/app/service/generale.service';

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

  constructor(private route: ActivatedRoute, private generale: GeneraleService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(async params => {
      this.id = parseInt(params['id'])
      this.post = await this.generale.getPostsById(this.id)
      this.isLoaded = true;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
