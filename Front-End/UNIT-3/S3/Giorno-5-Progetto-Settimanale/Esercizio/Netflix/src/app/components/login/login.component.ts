import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authSrv: AuthService, private router: Router) {}
  onSubmit(form:NgForm) {
    try {
      this.authSrv.login(form.value).subscribe((data) => {
        this.router.navigate(['/dashboard'])
      });
    } catch (error) {
      console.log(error)
    }
  }
}
