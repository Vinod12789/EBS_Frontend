import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  IsLoggedIn(){
    return !!localStorage.getItem('login');
  }
}
