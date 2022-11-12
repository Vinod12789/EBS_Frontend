import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormControl,FormGroup,Validators}from'@angular/forms';
@Component({
  selector: 'app-cust-registration',
  templateUrl: './cust-registration.component.html',
  styleUrls: ['./cust-registration.component.css']
})
export class CustRegistrationComponent implements OnInit {
  alert:boolean=false
  constructor(private http:HttpClient) { }
  postcustdata(val:any)

  {

    this.http.post("http://localhost:5003/api/Customers",val).subscribe

    ((result)=>{console.warn("result",result)}

      )

  }
  ngOnInit(): void {
  }
  registerform= new FormGroup({
    name: new FormControl("",[Validators.required , Validators.minLength(2), Validators.pattern("[a-zA-Z ]*")]),
    email: new FormControl("",[Validators.required ,  Validators.email]),
    mobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    password: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    address: new FormControl("",[Validators.required])
    
 });

 registerSubmited(){
  this.alert=true;
  this.registerform.reset({});
  console.log(this.registerform.get("name"));
 }

get name(): FormControl{
  return this.registerform.get("name") as FormControl;
 }
 get email(): FormControl{
  return this.registerform.get("email") as FormControl;
 }
 get mobile(): FormControl{
  return this.registerform.get("mobile") as FormControl;
 }
 get password(): FormControl{
  return this.registerform.get("password") as FormControl;
 }
 get address(): FormControl{
  return this.registerform.get("address") as FormControl;
 }
 closeAlert(){
  this.alert=false
}

}
