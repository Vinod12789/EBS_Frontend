import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerCustomer(Customer : Array<any>){
   return  this.http.post<any>("https://electricitysystem.azurewebsites.net/api/Customers",{
    customerName:Customer[0],
    customerEmail:Customer[1],
    customerMobile:Customer[2],

    customerAddress:Customer[3],
    customerPassword:Customer[4]
    
   });
  }

  UpdateCustomer(id:number, Customer:Array<any>){
    return  this.http.put<any>("https://electricitysystem.azurewebsites.net/api/Customers/"+id,{
     customerName:Customer[0],
     customerEmail:Customer[1],
     customerMobile:Customer[2],
 
     customerAddress:Customer[3],
     customerPassword:Customer[4]
     
    });
   }
  registerCust(Customer : Array<any>){
    return  this.http.post<any>("https://electricitysystem.azurewebsites.net/api/Customers",{
     CustomerName:Customer[0],
     CustomerEmail:Customer[1],
     CustomerMobile:Customer[2],
 
     CustomerAddress:Customer[3],
     CustomerPassword:Customer[4]
     
    });
   }


  registerBill(Bill :Array<any>){
    return  this.http.post<any>("https://electricitysystem.azurewebsites.net/api/Bills",{
    BillGenDate:Bill[0],
    CustomerId:Bill[1],
    PerUnitCost:Bill[2],
    TotalUnits:Bill[3],
    BillAmount:Bill[4],
    BillDueDate:Bill[5]
  });
  }

  registerPay(Bill :Array<any>)
  {
    return  this.http.post<any>("https://electricitysystem.azurewebsites.net/api/Payments",{
    PaymentDate:Bill[0],
    CustomerId:Bill[1],
    BillId:Bill[2],
    PaymentStatus:Bill[3]
  }); 
  }

  // loginCustomer(Customer : Array<any>){
    
  //   return  this.http.post<any>("http://localhost:5003/api/Customers",{
  //   //  CustomerName:Customer[0],
  //    CustomerEmail:Customer[0],
  //   //  CustomerMobile:Customer[2],
     
  //   //  CustomerAddress:Customer[3],
  //    CustomerPassword:Customer[1]
     
  //   });
  //  }


  login(user: User):Observable<any>{
    return this.http.post<any>('https://electricitysystem.azurewebsites.net/api/Auth/Login', user);
   }


  }

