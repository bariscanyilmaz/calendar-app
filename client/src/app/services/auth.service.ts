import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: User;

  constructor() { }

  login(user: User): Observable<boolean> {
    //return this.http.post('',user);
    return of(true);
  }

  signup(user: User): Observable<boolean> {
    return of(true);
  }

  setLoggedIn(token: string) {
    localStorage.setItem('token', token);

    this.isLoggedIn.next(true);
  }

  isAuth(): Observable<boolean> {
    //
    return this.isLoggedIn.asObservable();
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }

}
