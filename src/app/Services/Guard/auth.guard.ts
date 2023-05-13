import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accSrv:AccountService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      let user = this.accSrv.getuser()
      if(user.token ==""||user.token==undefined){
        // console.log(route,state)
        alert("you need to sign in !!")
        // this.router.navigateByUrl('/login')
        this.router.navigate([
          '/login',
          state.url
        ])
        return false;
      }

      else
        return true;
  }
  
}
