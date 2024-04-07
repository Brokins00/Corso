import { Component } from '@angular/core';
import { AuthData } from 'src/app/interface/auth-data.interface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
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
