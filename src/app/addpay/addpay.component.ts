import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { UserdataService } from '../userdata.service';
import {distinct} from 'rxjs/operators';
import { Bill } from '../bill.model';


@Component({
  selector: 'app-addpay',
  templateUrl: './addpay.component.html',
  styleUrls: ['./addpay.component.css']
})

export class AddpayComponent implements OnInit {

  constructor(private authService: AuthService,public dailog:MatDialogRef<AddpayComponent>, private userDataService: UserdataService) {
    this.userDataService.getBillData().subscribe(res=>{
      this.custData=res;
    })
    this.userDataService.getCustData().subscribe(data=>{
      this.custData1 = data
    })
   }

  ngOnInit(): void {
  }

  registerform= new FormGroup({
    PaymentDate: new FormControl("",[Validators.required]),
    CustomerId: new FormControl("",[Validators.required ]),
    BillId: new FormControl("",[Validators.required]),
    PaymentStatus: new FormControl("",[Validators.required])
    
 });

 custData:any=[];
 custData1: any=[];

 registerSubmited(){
     this.authService.registerPay([
      this.registerform.value.PaymentDate,
      this.registerform.value.CustomerId,
      this.registerform.value.BillId,
      this.registerform.value.PaymentStatus
     ]).subscribe(res => {
      // if(res=='Success'){
      //   alert("successful !");
      // }
      
     })
     
 }
  replace(){
    location.replace("paymentlist");
  }

}
