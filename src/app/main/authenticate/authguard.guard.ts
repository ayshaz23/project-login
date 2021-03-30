import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {


  constructor(public router: Router){}

  canActivate(): boolean {
    if(this.loggedIn){
      return true
    }
    else{
      this.router.navigate(['/'])
    }
      }

      public loggedIn(){
        return !!localStorage.getItem('token')
      }

}
