import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = {
    username: null,
    password: null,
  };
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private router:Router) { }

  login(username:string, password:string) {
    this.user.username = username;
    this.user.password = password;
    this.isLoggedIn.next(true);
    return true
  }

  logout() {
    this.user.username = null;
    this.user.password = null;
    this.isLoggedIn.next(false);
    this.router.navigate(['/'])
    return true
  }
}
