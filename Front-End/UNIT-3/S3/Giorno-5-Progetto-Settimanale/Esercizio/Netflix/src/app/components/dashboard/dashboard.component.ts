import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Genres } from 'src/app/interface/genres.interface';
import { Movie } from 'src/app/interface/movie.interface';
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
  apiImgUrl: string = environment.apiImgUrl

  constructor(private moviesSrv: MoviesService, private config:NgbCarouselConfig) {
    config.interval = 10000
  }

  ngOnInit(): void {
    this.moviesSrv.getGenres().subscribe((value) => {
      this.genres = value;
    })
    this.moviesSrv.getPopulars().subscribe((value) => {
      this.populars = value;
    })
  }

  selectGenre(genre: (Genres)) {
    this.selectedGenre = genre;
  }
}
