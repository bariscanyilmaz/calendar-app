import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

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


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  login(): void {
    this.authService.login(this.loginForm.value as User).subscribe(res => {
      if (res) {
        this.authService.setLoggedIn('123456');
        this.router.navigate(['/']);
      }
    })
  }
  closeAlert() {
    this.isError = false;
  }

}
