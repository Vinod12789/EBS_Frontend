import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.component.html',
  styleUrls: ['./cust-profile.component.css']
})
export class CustProfileComponent implements OnInit {



  data:any;
  userData:any=[];
  custData:any=[];
  constructor( private userdataservice:UserdataService, private router:Router, private route:ActivatedRoute) { 
    this.userdataservice.getUserData().subscribe(dataa=>{
      this.userData=dataa;
    })
    this.userdataservice.getCustData().subscribe(data=>{
      this.custData=data;
    })
  }



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
