import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthData } from 'src/app/interface/auth-data.interface';
import { Genres } from 'src/app/interface/genres.interface';
import { Movie } from 'src/app/interface/movie.interface';
import { AuthService } from 'src/app/service/auth.service';
import { MoviesService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  genres: Genres[] = []
  selectedGenre: (Genres) = {id: -1, name: 'Generi'};
  populars: Movie[] = []
  toprated: Movie[] = []
  favorites: Movie[] = []
  films: Movie[] = []
  filtred: Movie[] = []
  random!: Movie;
  loaded:boolean = false;
  user!: AuthData | null;
  apiImgUrl: string = environment.apiImgUrl

  constructor(private moviesSrv: MoviesService, private config:NgbCarouselConfig, private userSrv: AuthService) {
    config.interval = 10000
  }

  ngOnInit(): void {
    this.update();
  }

  private async update() {
    let genres = await this.moviesSrv.getGenres().toPromise()
    if (genres!== undefined) {
      this.genres = genres
    }
    let populars = await this.moviesSrv.getPopulars().toPromise()
    if (populars!== undefined) {
      this.populars = populars
    }
    let toprated = await this.moviesSrv.getTopRated().toPromise()
    if (toprated!== undefined) {
      this.toprated = toprated
    }
    this.films = [...this.films, ...this.populars, ...this.toprated]
    this.userSrv.user$.subscribe(async (value) => {
      this.user = value;
      this.random = this.films[Math.floor(Math.random() * this.films.length)]
      if (this.user) {
        this.favorites = []
        for (const film of this.films) {
          let favorite = await this.moviesSrv.getFavoriteFromId(film.id, Number(this.user.user.id))
          if (favorite !== undefined) {
            this.favorites.push(film)
          }
        }
        this.loaded = true
      }
    })
  }

  selectGenre(genre: (Genres)) {
    this.selectedGenre = genre;
    if (genre.name !== 'Generi') {
      this.filtred = this.films.filter((value) => value.genre_ids.includes(genre.id))
    }
  }
}
