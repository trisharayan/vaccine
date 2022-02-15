import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import {environment} from '../../environments/environment';
@Injectable({ 
  providedIn: 'root' 
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email_id: string, password: string) {
    return this.http.post<any>(`login`, { email_id, password })
      .pipe(map(user => {
        if (user) {
          // store user details in local storage to keep user logged in
          sessionStorage.setItem('login', user);
          sessionStorage.setItem('email_id', email_id);
          sessionStorage.setItem('password', password);

          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user data from local storage for log out
    sessionStorage.removeItem('login');
    this.currentUserSubject.next(null);
  }
}