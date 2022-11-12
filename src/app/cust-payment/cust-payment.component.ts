import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cust-payment',
  templateUrl: './cust-payment.component.html',
  styleUrls: ['./cust-payment.component.css']
})
export class CustPaymentComponent implements OnInit {

 

  // ngOnInit(): void {
  // }
  userData:any=[];
  custData:any=[];
 
  constructor( private userdataservice:UserdataService ,private AuthService:AuthService, private router:Router, private route:ActivatedRoute) { 
    this.userdataservice.getPaymentData().subscribe(dataa=>{
      this.userData=dataa;
    })
    this.userdataservice.getCustData().subscribe(data=>{
            this.custData=data;
          })

        }

data:any;
// data1:any;
value='';

 SaveData(value:any[])
  {
    let data:any=value;
    this.router.navigate(['/postlogincustomer'],
    {queryParams:{data:JSON.stringify(data)}})
  }

ngOnInit(): void {
  this.route.queryParams.subscribe((params)=>{console.log(params);
  this.data=JSON.parse(params['data']);
  })
}
}

