import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Photo } from '../interface/photo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchsService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
  }
}
