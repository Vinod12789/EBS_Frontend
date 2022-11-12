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
    let apiurl="http://localhost:5003/api/Bills";

    return this.http.get<Bill[]>(apiurl);

  }
  getBillData(){
    let apiurl="http://localhost:5003/api/Bills";
    return this.http.get(apiurl);
  }
  getCustData(){
    let apiurl="http://localhost:5003/api/Customers";
    return this.http.get(apiurl);
  }
  getPaymentData(){
    let apiurl="http://localhost:5003/api/Payments";
    return this.http.get(apiurl);
  }
  deleteCustData(id: number){
    let apiurl="http://localhost:5003/api/Customers/"+id;
    return this.http.delete(apiurl);
  }
  deleteBillData(id: number){
    let apiurl="http://localhost:5003/api/Bills/"+id;
    return this.http.delete(apiurl);
  }
  deletePayData(id: number){
    let apiurl="http://localhost:5003/api/Payments/"+id;
    return this.http.delete(apiurl);
  }
  getCurrentData(id:number){
    let apiurl="http://localhost:5003/api/Customers/"+id;
    return this.http.get(apiurl);
  }
  updateData(cus: Customer){
    let apiurl="http://localhost:5003/api/Customers/"+cus.customerId;
     return this.http.put<Customer>(apiurl, cus);
  }
}
