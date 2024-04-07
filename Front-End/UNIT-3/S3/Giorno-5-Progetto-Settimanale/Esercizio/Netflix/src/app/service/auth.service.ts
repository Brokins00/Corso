import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { AuthData } from '../interface/auth-data.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Admin } from '../interface/admin.interface';
import { User } from '../interface/user.interface';

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

  getAdmins() {
    return this.http.get<Admin[]>(`${this.apiUrl}admins`)
  }

  async isAdmin(userId:number) {
    let admins = []
    let adminsP = await this.getAdmins().toPromise()
    let isAdmin = false
    if (adminsP) {
      admins = [...adminsP]
      for (let i=0; i < admins.length; i++) {
        if (admins[i].userId === userId) {
          isAdmin = true
        }
      }
    }
    return isAdmin
  }

  async getUsers() {
    let usersP = await this.http.get<User[]>(`${this.apiUrl}users`).toPromise();
    let users: User[] = []
    if (usersP !== undefined) {
      users = [...usersP]
      for (let i = 0; i < users.length; i++) {
        users[i].admin = await this.isAdmin(users[i].id || -1)
      }
    }
    return users
  }

  login(data: {email: string, password: string}) {
    return this.http.post<AuthData>(`${this.apiUrl}login`, data).pipe(
      tap(async (data) => {
        this.authSub.next(data)
        localStorage.setItem('user', JSON.stringify(data))
        this.autoLogout(data)
        data.user.admin = await this.isAdmin(Number(data.user.id))
        this.authSub.next(data)
      }),
      catchError(this.errors)
    )
  }

  logout() {
    this.authSub.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  async restore() {
    const userJson = localStorage.getItem('user')
    if (!userJson) {
      return
    }
    const user:AuthData = JSON.parse(userJson);
    this.authSub.next(user);
    this.autoLogout(user);
    user.user.admin = await this.isAdmin(Number(user.user.id))
    this.authSub.next(user)
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
