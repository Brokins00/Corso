import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Genres } from '../interface/genres.interface';
import { Observable } from 'rxjs';
import { Movie } from '../interface/movie.interface';
import { Favorite } from '../interface/favorite.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = environment.apiUrl
  private movies:Movie[] = []
  private genres:Genres[] = []
  private favorites:Favorite[] = []
  constructor(private http:HttpClient) {
    this.refresh()
  }

  refresh() {
    this.http.get<Movie[]>(`${this.apiUrl}movies-popular`).subscribe((movie) => {
      this.movies = [...this.movies, ...movie]
    })
    this.http.get<Movie[]>(`${this.apiUrl}movies-toprated`).subscribe((movie) => {
      this.movies = [...this.movies, ...movie]
    })
    this.http.get<Genres[]>(`${this.apiUrl}genres`).subscribe((genre) => {
      this.genres = genre
    })
    this.http.get<Favorite[]>(`${this.apiUrl}favorites`).subscribe(value => {
      this.favorites = value
    })
  }

  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>(`${this.apiUrl}genres`)
  }

  getPopulars(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}movies-popular`)
  }

  getTopRated(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}movies-toprated`)
  }

  getMovieById(id:number) {
    return this.movies.find((movie) => movie.id === id)
  }

  getGenresById(id:number) {
    return this.genres.find(genre => genre.id === id)
  }

  setFavorate(id:number, userId: number) {
    return this.http.post(`${this.apiUrl}favorites`, {userId: userId, movieId: id})
  }

  getFavoriteFromId(id:number, userId: number) {
    return this.favorites.find((value) => value.userId === userId && value.movieId === id)
  }

  removeFavorate(id:number) {
    console.log(`${this.apiUrl}favorites/${id}`)
    return this.http.delete(`${this.apiUrl}favorites/${id}`)
  }
}
