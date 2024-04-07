import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/interface/auth-data.interface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: AuthData;
  constructor(private userSrv:AuthService) {}
  ngOnInit(): void {
    this.userSrv.user$.subscribe((value) => {
      console.log(value)
      if (value !== null) {
        this.user = value
      }
    })
  }
}
