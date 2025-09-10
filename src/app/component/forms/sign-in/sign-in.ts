import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Host } from "../../host/host";
import { NgContent } from "../../ng-content/ng-content";
import { Signal } from "../../signal/signal";

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, Host, NgContent, Signal],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss'
})
export class SignIn {
  constructor(private fb: NonNullableFormBuilder) { }
  signInForm !: FormGroup;
  count: any[] = [];
  // count: number = 0;
  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(8)]],
    })
  }
  onSubmit() {
    // this.count++;
    // if (!this.signInForm.valid) {
    //   console.log("form not valid");
    // }
    // console.log("form submitted successfully");
    this.count.push("parent");
  }
  ngDoCheck(): void {
    console.log("signIn call", this.count);
  }
}
