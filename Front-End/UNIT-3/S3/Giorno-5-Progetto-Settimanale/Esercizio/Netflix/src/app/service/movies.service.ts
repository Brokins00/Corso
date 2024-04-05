import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Genres } from '../interface/genres.interface';
import { Observable } from 'rxjs';
import { Movie } from '../interface/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = environment.apiUrl
  constructor(private http:HttpClient) { }

  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>(`${this.apiUrl}genres`)
  }

  getPopulars(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}movies-popular`)
  }
}
