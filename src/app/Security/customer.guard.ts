import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
  constructor(private auth : CustomerService,private router : Router){


  }
  canActivate(){
    if(this.auth.IsLoggedIn())
  {
    return true;
  }
 alert("you are not logged in!")
this.router.navigate(['login']);
return false; 
  
}
}
