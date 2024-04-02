import { Component } from '@angular/core';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.scss']
})
export class FormDrivenComponent {
  login = {
    userName: "",
    password: ""
  }

  submitted = false;

  onSubmit() {
    this.submitted = true
  }
}
