import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('test');
    // let's say u have a token saved in local storage
    // u will check if there is a token,
    // then call an api or js return true
    if (localStorage.getItem('isLogin') === '1') {
      return true;
    }

    return false;
  }
}
