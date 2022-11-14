import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/customer.model';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-addcust',
  templateUrl: './addcust.component.html',
  styleUrls: ['./addcust.component.css']
})
export class AddcustComponent implements OnInit {

  constructor(private authService: AuthService,public dailog:MatDialogRef<AddcustComponent>, private userDataService: UserdataService) { }
  cusdata: any=[];
  logindata: any=[];
  ngOnInit(): void {
  }
  registerform= new FormGroup({
    CustomerName: new FormControl("",[Validators.required , Validators.minLength(2), Validators.pattern("[a-zA-Z ]*")]),
    CustomerEmail: new FormControl("",[Validators.required ,  Validators.email]),
    CustomerMobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    CustomerAddress: new FormControl("",[Validators.required]),
    CustomerPassword: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    
 });

 registerSubmited(){
     this.authService.registerCust([
      this.registerform.value.CustomerName,
      this.registerform.value.CustomerEmail,
      this.registerform.value.CustomerMobile,
      this.registerform.value.CustomerAddress,
      this.registerform.value.CustomerPassword
      
      // this.registerform.reset({})
     ]).subscribe(res => {
      // if(res=='Success'){
      //   this.displayMsg = 'Account Created Successfully!';
      //   this.isAccountCreated=true;
      // }
      this.cusdata = res;
     })
     console.log(this.cusdata);
    

 }
// sendMail(Cus: Customer){
//   return this.userDataService.MailCustomer(Cus.customerEmail).subscribe(res=>{
//     this.logindata= res;
//     console.log("MAil");
//   })

// }
get name(): FormControl{
  return this.registerform.get("CustomerName") as FormControl;
 }
 get email(): FormControl{
  return this.registerform.get("CustomerEmail") as FormControl;
 }
 get mobile(): FormControl{
  return this.registerform.get("CustomerMobile") as FormControl;
 }
 
 get address(): FormControl{
  return this.registerform.get("CustomerAddress") as FormControl;
 }
 get password(): FormControl{
  return this.registerform.get("CustomerPassword") as FormControl;
 }

replace(){
  location.replace("customerlist");
}

}
