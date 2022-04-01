import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CalendarApp';


  isLoggedIn: boolean;
  unReadCount: number = 0;
  @ViewChild(MatSidenav) sidenav: MatSidenav;


  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    this.authService.isAuth().subscribe(res => {
      this.isLoggedIn = res;
      if (!res) {
        this.router.navigate(['/login']);
      }

    })
  }

  logout(): void {
    this.authService.logOut();
  }

}
