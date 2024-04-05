import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authSrv: AuthService, private router: Router) {}
  onSubmit(form:NgForm) {
    try {
      this.authSrv.register(form.value).subscribe(() => {
        this.router.navigate(['/login'])
      });
    } catch (error) {
      console.log(error)
    }
  }
}
