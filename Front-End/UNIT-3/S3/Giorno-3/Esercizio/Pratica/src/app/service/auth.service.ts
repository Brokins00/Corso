import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.interface';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { AuthData } from '../interface/auth-data.interface';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: BehaviorSubject<AuthData | null> = new BehaviorSubject<AuthData | null>(null);
  user$ = this.user.asObservable();
  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient, private router: Router) { }

  register(data:{nickname: string, email: string, password: string}) {
    return this.http.post(`${this.apiUrl}register`, data).pipe(this.errors)
  }

  private errors(err: any) {
    switch (err.error) {
        case 'Email already exists':
            return throwError('Utente già presente');
            break;

        case 'Incorrect password':
            return throwError('Password errata');
            break;

        case 'Cannot find user':
            return throwError('Utente non trovato');
            break;

        default:
            return throwError('Errore nella chiamata');
            break;
    }
}
}
