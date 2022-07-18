import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Hoa Kỳ'},
    {id: 3, name: 'Trung Quốc'},
  ]

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(6), Validators.required]),
    confirmPassword: new FormControl("", [Validators.minLength(6), Validators.required]),
    country: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required, Validators.min(18)]),
    gender: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")]),
  });

  get email() {
    return this.registerForm.get("email")
  }

  get password() {
    return this.registerForm.get("password")
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword")
  }

  get country() {
    return this.registerForm.get("country")
  }

  get age() {
    return this.registerForm.get("age")
  }

  get gender() {
    return this.registerForm.get("gender")
  }

  get phone() {
    return this.registerForm.get("phone")
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("ok")
    console.log(this.registerForm.value)
  }

  checkConfirmPassword() {
    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      // @ts-ignore
      document.getElementById("abc").style.visibility = "visible";
    }
  }
}
