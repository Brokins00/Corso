import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthData } from 'src/app/interface/auth-data.interface';
import { Movie } from 'src/app/interface/movie.interface';
import { AuthService } from 'src/app/service/auth.service';
import { MoviesService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  movie:Movie|undefined;
  apiImgUrl = environment.apiImgUrl;
  genres = "";
  favorited = false;
  user!:AuthData|null;

  constructor(private route: ActivatedRoute, private movieSrv: MoviesService, private userSrv: AuthService) {
    userSrv.user$.subscribe((value) => {
      this.user = value;
    })
    const idO: Observable<string> = route.params.pipe(map((p) => p['id']))
    idO.subscribe((id) => {
      setTimeout(async () => {
        let idN = Number(id)
        this.movie = await movieSrv.getMovieById(idN)
        if (this.movie) {
          this.genres = await this.getGenres()
          this.movie.vote_average = this.movie.vote_average / 2
          if (this.user) {
            let favorite = await this.movieSrv.getFavoriteFromId(this.movie.id, Number(this.user.user.id))
            this.favorited = favorite ? true : false
          }
        }
      }, 2000)
    })
  }

  async getGenres() {
    let genres = ""
    if(this.movie) {
      for (let i = 0; i < this.movie.genre_ids.length; i++) {
        let genre = await this.movieSrv.getGenresById(this.movie.genre_ids[i])
        if (genre) {
          if (genres.length == 0) {
            genres += genre.name
          } else {
            genres += `, ${genre.name}`
          }
        }
      }
    }
    return genres
  }

  async favorite(id:number) {
    this.favorited = !this.favorited;
    if (this.user) {
      if (this.favorited) {
        this.movieSrv.setFavorate(id, Number(this.user.user.id)).subscribe()
      } else {
        let favorite = await this.movieSrv.getFavoriteFromId(id, Number(this.user.user.id))
        if (favorite) {
          this.movieSrv.removeFavorate(favorite.id).subscribe()
        }
      }
    }
  }
}
