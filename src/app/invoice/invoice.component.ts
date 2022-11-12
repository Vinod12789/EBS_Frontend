import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  data:any;
  userData:any=[];
  paydata:any=[];
  custdata:any=[];
  constructor( private userdataservice:UserdataService, private router:Router, private route:ActivatedRoute) { 
    // private router:Router;
    this.userdataservice.getUserData().subscribe(dataa=>{
      this.userData=dataa;
    })
    this.userdataservice.getPaymentData().subscribe(dataa=>{
      this.paydata=dataa;
    })
    this.userdataservice.getCustData().subscribe(dataa=>{
      this.custdata=dataa;
    })
}

ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{console.log(params);
    this.data=JSON.parse(params['data']);
    })
  }
}

