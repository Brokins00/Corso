import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/interface/auth-data.interface';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: AuthData|null = null;

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((value) => {
      this.user = value
    })
  }

  logout() {
    this.authSrv.logout();
  }
}
