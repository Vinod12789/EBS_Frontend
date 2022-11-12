import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-postlogincustomer',
  templateUrl: './postlogincustomer.component.html',
  styleUrls: ['./postlogincustomer.component.css']
})

export class PostlogincustomerComponent implements OnInit {

  CustData:any=[];
  constructor( private UserdataService:UserdataService,private authservice:AuthService, private router:Router, private route:ActivatedRoute) { 
    this.UserdataService.getCustData().subscribe(dataa=>{
      this.CustData=dataa;
    })
  
  }
  public  data:any;
  

  value='';

 SaveData(value:any)
  {
    let data:any=value;
    this.router.navigate(['/custpayment'],
    {queryParams:{data:JSON.stringify(data)}})
  }
  SaveData1(value:any)
  {
    let data:any=value;
    this.router.navigate(['/custbills'],
    {queryParams:{data:JSON.stringify(data)}})
  }
  SaveData2(value:any)
  {
    let data:any=value;
    this.router.navigate(['/custProfile'],
    {queryParams:{data:JSON.stringify(data)}})
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{console.log(params);
    this.data=JSON.parse(params['data']);
    
    })
  }
  
  
}
