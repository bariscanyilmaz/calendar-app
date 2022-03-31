import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  hide: boolean = true;
  isError: boolean = false;
  errorMessage: string = "";

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  constructor() { }

  ngOnInit(): void {
    
  }

  login(): void {
    
  }
  closeAlert() {
    this.isError = false;
  }

}
