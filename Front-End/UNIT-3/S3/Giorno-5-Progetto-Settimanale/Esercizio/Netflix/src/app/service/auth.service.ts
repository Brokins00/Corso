import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { AuthData } from '../interface/auth-data.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private jwtHelper = new JwtHelperService();

  private authSub = new BehaviorSubject<AuthData | null>(null);
  user$ = this.authSub.asObservable();
  private timeOut!: any;
  
  constructor(private http:HttpClient, private router: Router) { }

  register(data: {username: string, password:string, email:string}) {
    return this.http.post(`${this.apiUrl}register`, data).pipe(catchError(this.errors))
  }

  login(data: {email: string, password: string}) {
    return this.http.post<AuthData>(`${this.apiUrl}login`, data).pipe(
      tap((data) => {
        this.authSub.next(data)
        localStorage.setItem('user', JSON.stringify(data))
        this.autoLogout(data)
      }),
      catchError(this.errors)
    )
  }

  logout() {
    this.authSub.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  restore() {
    const userJson = localStorage.getItem('user')
    if (!userJson) {
      return
    }
    const user:AuthData = JSON.parse(userJson);
    this.authSub.next(user);
    this.autoLogout(user);
  }

  private autoLogout(data:AuthData) {
    const dataExp = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
    const msExp = dataExp.getTime() - new Date().getTime();
    this.timeOut = setTimeout(() => {
      this.logout();
    }, msExp)
  }

  private errors(err: any) {
    console.log(err.error)
      let error = "";
      switch (err.error) {
          case 'Email already exists':
              error = "Utente già presente"
              break;

          case 'Incorrect password':
              error = 'Password errata';
              break;

          case 'Cannot find user':
              error = 'Utente non trovato';
              break;
          case 'Password is too short':
            error = 'La password è troppo corta';
            break
          default:
              error = 'Errore nella chiamata';
              break;
      }
      return throwError(error)
  }
}
