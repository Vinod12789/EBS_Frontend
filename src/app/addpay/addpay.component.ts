import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-addpay',
  templateUrl: './addpay.component.html',
  styleUrls: ['./addpay.component.css']
})
export class AddpayComponent implements OnInit {

  constructor(private authService: AuthService,public dailog:MatDialogRef<AddpayComponent>) { }

  ngOnInit(): void {
  }

  registerform= new FormGroup({
    PaymentDate: new FormControl("",[Validators.required]),
    CustomerId: new FormControl("",[Validators.required ]),
    BillId: new FormControl("",[Validators.required]),
    PaymentStatus: new FormControl("",[Validators.required])
    
 });

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
