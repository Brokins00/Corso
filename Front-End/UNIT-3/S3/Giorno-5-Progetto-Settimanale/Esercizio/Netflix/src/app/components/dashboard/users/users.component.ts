import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = []

  constructor(private authSrv: AuthService) {}

  async ngOnInit() {
    this.users = await this.authSrv.getUsers()
  }
}
