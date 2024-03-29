import { Component } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
    user: User = {}

    constructor(private userS:UserService) {}

    onSubmit() {
      this.userS.create(this.user)
    }
}
