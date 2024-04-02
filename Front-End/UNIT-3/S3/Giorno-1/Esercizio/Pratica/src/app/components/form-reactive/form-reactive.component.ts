import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {
  validatePassword = (formGroup: AbstractControl) => {
    if (formGroup.value.password == formGroup.value.passwordRepeat) {
      return null
    } else {
      return {passwordMismatch: true};
    }
  }

  registerForm:FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    passwordRepeat: new FormControl(''),
    genere: new FormControl(''),
    imgProfile: new FormControl(''),
    bio: new FormControl(''),
    userName: new FormControl('')
  }, {validators: [Validators.required, this.validatePassword]});

  imgPreview!: string | null | ArrayBuffer;

  resetImgProfile() {
    const id = document.getElementById('imgProfile') as HTMLInputElement
    if (id) {
      id.value = '';
      this.registerForm.get('imgProfile')?.setValue('');
      this.imgPreview = null
    }
  }
  
  onSubmit() {
    console.log(this.registerForm.value)
    this.registerForm.reset();
    this.imgPreview = null
  }

  readURL(event:any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const reader = new FileReader();
      reader.onload = e => this.imgPreview = reader.result

      reader.readAsDataURL(file)
    }
  }
}
