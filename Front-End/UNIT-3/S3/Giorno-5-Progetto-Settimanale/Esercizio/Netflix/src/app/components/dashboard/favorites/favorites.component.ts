import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/interface/auth-data.interface';
import { Favorite } from 'src/app/interface/favorite.interface';
import { Movie } from 'src/app/interface/movie.interface';
import { AuthService } from 'src/app/service/auth.service';
import { MoviesService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  films:Movie[] = []
  user: AuthData | null = null;
  favorites: Movie[] = [];
  genres:string[] = [];
  loaded = false;
  apiImgUrl = environment.apiImgUrl;
  constructor(private moviesSrv: MoviesService, private userSrv: AuthService) {}

  ngOnInit(): void {
    this.update()
  }

  private async update() {
    let populars = await this.moviesSrv.getPopulars().toPromise()
    if (populars== undefined) {
      populars = []
    }
    let toprated = await this.moviesSrv.getTopRated().toPromise()
    if (toprated== undefined) {
      toprated = []
    }
    this.films = [...this.films, ...populars, ...toprated]
    this.userSrv.user$.subscribe(async (value) => {
      this.user = value;
      this.refresh()
    })
  }

  async refresh() {
    this.loaded = false;
    if (this.user) {
      this.favorites = []
      for (const film of this.films) {
        let favorite = await this.moviesSrv.getFavoriteFromId(film.id, Number(this.user.user.id))
        if (favorite !== undefined) {
          film.overview = film.overview.slice(0, 210)+'...'
          this.favorites.push(film)
        }
      }
      this.genres = await this.getGenres()
      this.loaded = true
    }
  }

  async getGenres() {
    let genres: string[] = []
    if(this.favorites) {
      for (let i = 0; i < this.favorites.length; i++) {
        for (let j=0; j < this.favorites[i].genre_ids.length; j++) {
          let genre = await this.moviesSrv.getGenresById(this.favorites[i].genre_ids[j])
          if (genre) {
            if (!genres[i] || genres[i].length == 0) {
              genres[i] = genre.name
            } else {
              genres[i] += `, ${genre.name}`
            }
          }
        }
      }
    }
    return genres
  }

  async favorite(id:number) {
    if (this.user) {
      let favorite = await this.moviesSrv.getFavoriteFromId(id, Number(this.user.user.id))
      if (favorite) {
        this.moviesSrv.removeFavorate(favorite.id).subscribe()
        this.refresh()
      }
    }
  }
}
