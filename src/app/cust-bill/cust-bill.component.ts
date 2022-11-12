import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cust-bill',
  templateUrl: './cust-bill.component.html',
  styleUrls: ['./cust-bill.component.css']
})
export class CustBillComponent implements OnInit {

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
// getUserData(){
//   this.userdataservice.getUserData().subscribe(data=>{

//     this.userData=data;
//     console.log(data);
//   })
// }

value='';
data:any;
  
   SaveData(value:any[])
    {
      let data:any=value;
      this.router.navigate(['/invoice'],
      {queryParams:{data:JSON.stringify(data)}})
    }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{console.log(params);
    this.data=JSON.parse(params['data']);
    })
  }

}
