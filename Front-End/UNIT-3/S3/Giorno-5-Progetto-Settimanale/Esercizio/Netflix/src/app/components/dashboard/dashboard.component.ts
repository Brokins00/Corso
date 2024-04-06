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
  user!: AuthData | null;
  apiImgUrl: string = environment.apiImgUrl

  constructor(private moviesSrv: MoviesService, private config:NgbCarouselConfig, private userSrv: AuthService) {
    config.interval = 10000
    setTimeout(() => {
      this.random = this.films[Math.floor(Math.random() * this.films.length)]
    }, 1000)
  }

  ngOnInit(): void {
    this.moviesSrv.getGenres().subscribe((value) => {
      this.genres = value;
    })
    this.moviesSrv.getPopulars().subscribe((value) => {
      this.populars = value;
      this.films = [...this.films, ...this.populars]
    })
    this.moviesSrv.getTopRated().subscribe((value) => {
      this.toprated = value;
      this.films = [...this.films, ...this.toprated]
    })
    this.userSrv.user$.subscribe((value) => {
      this.user = value;
    })
  }

  selectGenre(genre: (Genres)) {
    this.selectedGenre = genre;
    if (genre.name !== 'Generi') {
      this.filtred = this.films.filter((value) => value.genre_ids.includes(genre.id))
    }
  }
}
