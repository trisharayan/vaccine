import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (sessionStorage.getItem("login") && sessionStorage.getItem("email_id") && sessionStorage.getItem("password")) {
      return true;
    }


    this.router.navigate(['/login']);
    return false;
  }
}