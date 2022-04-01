import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CalendarApp';

  opened: boolean;
  isLoggedIn$: Observable<boolean>;
  unReadCount: number = 0;
  @ViewChild(MatSidenav) sidenav: MatSidenav;


  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isAuth();
  }

  logout(): void {
    
  }

}
