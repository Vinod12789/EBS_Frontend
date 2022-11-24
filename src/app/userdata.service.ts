import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/customer.model';
import { Bill } from './bill.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  getUserData():Observable<Bill[]>{
    let apiurl="https://electricitysystem.azurewebsites.net/api/Bills";

    return this.http.get<Bill[]>(apiurl);

  }
  MailCustomer(cus: Customer){
    let apiurl=("https://electricitysystem.azurewebsites.net/api/Email");
    return this.http.post(apiurl, cus);
     
   }
  sendEmail(cus: Customer){
    let apiurl="http://localhost:3000/sendmail/?name&email"
    return this.http.post(apiurl,cus);
  }
  getBillData(){
    let apiurl="https://electricitysystem.azurewebsites.net/api/Bills";
    return this.http.get(apiurl);
  }
  getCustData(){
    let apiurl="https://electricitysystem.azurewebsites.net/api/Customers";
    return this.http.get(apiurl);
  }
  getPaymentData(){
    let apiurl="https://electricitysystem.azurewebsites.net/api/Payment";
    return this.http.get(apiurl);
  }
  deleteCustData(id: number){
    let apiurl="https://electricitysystem.azurewebsites.net/api/Customers/"+id;
    return this.http.delete(apiurl);
  }
  deleteBillData(id: number){
    let apiurl="https://electricitysystem.azurewebsites.net/api/Bills/"+id;
    return this.http.delete(apiurl);
  }
  deletePayData(id: number){
    let apiurl="https://electricitysystem.azurewebsites.net/api/Payment/"+id;
    return this.http.delete(apiurl);
  }
  getCurrentData(id: number){
    let apiurl="https://electricitysystem.azurewebsites.net/api/Customers/"+id;
    return this.http.get<Customer>(apiurl);
  }
  updateData(cus: Customer){
    let apiurl="https://electricitysystem.azurewebsites.net/api/Customers/"+cus.customerId;
     return this.http.put<Customer>(apiurl , cus);
  }
}
