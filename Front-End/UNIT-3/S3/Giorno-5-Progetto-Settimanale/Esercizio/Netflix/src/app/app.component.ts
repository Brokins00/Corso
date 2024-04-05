import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AuthData } from './interface/auth-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Netflix';
  user:AuthData|null = null;
  constructor(private authSrv:AuthService) {}

  ngOnInit(): void {
    this.authSrv.restore();
    this.authSrv.user$.subscribe((value) => {
      this.user = value
    })
  }
}
