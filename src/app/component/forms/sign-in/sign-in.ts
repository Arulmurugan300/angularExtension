import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule,],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss'
})
export class SignIn {
  constructor(private fb: NonNullableFormBuilder) { }
  signInForm !: FormGroup;
  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(8)]],
    })
  }
  onSubmit() {
    if (!this.signInForm.valid) {
      console.log("form not valid");
    }
    console.log("form submitted successfully");
  }
}
