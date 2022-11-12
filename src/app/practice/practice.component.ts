import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  data:any;
  userData:any=[];
  constructor( private userdataservice:UserdataService, private router:Router, private route:ActivatedRoute) { 
    // private router:Router;
    this.userdataservice.getUserData().subscribe(dataa=>{
      this.userData=dataa;
    })
}

ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{console.log(params);
    this.data=JSON.parse(params['data']);
    })
  }

}
