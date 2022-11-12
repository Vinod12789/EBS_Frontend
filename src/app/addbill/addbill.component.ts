import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.css']
})
export class AddbillComponent implements OnInit {
    

  date1 = new Date();
  currentYear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() +1;
  currentDay = this.date1.getUTCDate();
  finalMonth :any;
  finalDay : any;

  TodayDate="";
  custData:any=[];
  constructor(private userdataservice:UserdataService,private authService: AuthService,public dailogRef:MatDialogRef<AddbillComponent>, private formBuilder: FormBuilder) { 
    this.userdataservice.getCustData().subscribe(data=>{
      this.custData=data;
    })
  }

  ngOnInit(): void {

    if(this.currentMonth<10){
      this.finalMonth = "0"+ this.currentMonth;
    }else{
      this.finalMonth=this.currentMonth;
    }

    if(this.currentDay<10){
      this.finalDay = "0"+ this.currentDay;
    }else{
      this.finalDay=this.currentDay;
    }

    this.TodayDate = this.currentYear+ "-" +this.finalMonth+"-" + this.finalDay;



    

  }
  registerform= new FormGroup({
    BillGenDate: new FormControl(this.TodayDate),
    CustomerId: new FormControl("",[Validators.required ]),
    PerUnitCost: new FormControl("",[Validators.required]),
    TotalUnits: new FormControl("",[Validators.required]),
    BillAmount: new FormControl("",[Validators.required]),
    BillDueDate: new FormControl("",[Validators.required])
    
 });

 
 registerSubmited(){
     this.authService.registerBill([
      this.registerform.value.BillGenDate,
      this.registerform.value.CustomerId,
      this.registerform.value.PerUnitCost,
      this.registerform.value.TotalUnits,
      this.registerform.value.BillAmount,
      this.registerform.value.BillDueDate
     ]).subscribe(res => {
      // if(res=='Success'){
      //   alert("successful !");
      // }
      
     })
     
 }

 

get BillGenDate(): FormControl{
  return this.registerform.get("BillGenDate") as FormControl;
 }
 get CustomerId(): FormControl{
  return this.registerform.get("CustomerId") as FormControl;
 }
 get PerUnitCost(): FormControl{
  return this.PerUnitCost.get("PerUnitCost")as FormControl;
 }
 get TotalUnits(): FormControl{
  return this.registerform.get("TotalUnits") as FormControl;
 }
 get BillAmount(): FormControl{
  return this.registerform.get("BillAmount") as FormControl;
 }
 get BillDueDate(): FormControl{
  return this.registerform.get("BillDueDate") as FormControl;
 }

 replace(){
  location.replace("billlist");
}
}
