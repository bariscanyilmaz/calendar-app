import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide: boolean = true;
  isError: boolean = false;
  errorMessage: string = "";

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor() { }

  ngOnInit(): void {

  }

  signup(): void {

  }

  closeAlert() {
    this.isError = false;
  }

}
