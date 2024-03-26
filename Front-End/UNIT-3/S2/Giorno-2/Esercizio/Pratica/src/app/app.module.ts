import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { LikedPostsComponent } from './components/liked-posts/liked-posts.component';
import { SeeMoreComponent } from './components/see-more/see-more.component';
import { CardComponent } from './components/card/card.component';
import { CustomColorsDirective } from './directives/custom-colors.directive';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "active",
    component: ActivePostsComponent
  },
  {
    path: "inactive",
    component: InactivePostsComponent
  },
  {
    path: "detailPost/:id",
    component: PostDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    NavbarComponent,
    HomeComponent,
    JumbotronComponent,
    LikedPostsComponent,
    SeeMoreComponent,
    CardComponent,
    CustomColorsDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
