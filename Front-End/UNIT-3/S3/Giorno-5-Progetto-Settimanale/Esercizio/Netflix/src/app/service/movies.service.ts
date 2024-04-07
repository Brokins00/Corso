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
  constructor(private http:HttpClient) {}

  getFavorites() {
    return this.http.get<Favorite[]>(`${this.apiUrl}favorites`)
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

  async getMovieById(id:number) {
    let films: Movie[] = []
    let popular:Movie[] | undefined = await this.getPopulars().toPromise()
    let topRated:Movie[] | undefined = await this.getTopRated().toPromise()
    if (popular !== undefined) {
      films = [...films, ...popular]
    }
    if (topRated !== undefined) {
      films = [...films, ...topRated]
    }
    return films.find((movie) => movie.id === id)
  }

  async getGenresById(id:number) {
    let genres: Genres[] = []

    let genresP = await this.getGenres().toPromise()
    if (genresP !== undefined) {
      genres = [...genres, ...genresP]
    }
    
    return genres.find(genre => genre.id === id)
  }

  setFavorate(id:number, userId: number) {
    return this.http.post(`${this.apiUrl}favorites`, {userId: userId, movieId: id})
  }

  async getFavoriteFromId(id:number, userId: number) {
    let favorites:Favorite[] = []
    let favoritesP = await this.getFavorites().toPromise()
    if (favoritesP !== undefined) {
      favorites = [...favorites, ...favoritesP]
    }
    return favorites.find((value) => value.userId === userId && value.movieId === id)
  }

  async getFavoritesFromUser(userId: number) {
    let favorites:Favorite[] = []
    let favoritesP = await this.getFavorites().toPromise()
    if (favoritesP !== undefined) {
      favorites = [...favorites, ...favoritesP]
    }
    return favorites.filter((value) => value.userId === userId)
  }

  removeFavorate(id:number) {
    return this.http.delete(`${this.apiUrl}favorites/${id}`)
  }
}
