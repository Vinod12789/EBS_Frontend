import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  // email = new FormControl('');
  date = new FormControl('');

  constructor(private fb:FormBuilder, private userdataService: UserdataService, private route: ActivatedRoute,  private router:Router) {
    
    // this.getData();
    this.route.queryParams.subscribe((params)=>{console.log(params);
      this.data=JSON.parse(params['data']);
      })

   }
  public custData:any=[];
  getData(){
    this.userdataService.getCustData().subscribe(dataa=>{
      this.custData=dataa;
    })
  }
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile:new FormControl(''),
    address: new FormControl(''),
    password: new FormControl('')
  });

// value:any;
submit()
{
  for(let cust of this.custData)
      {
        if(this.data==cust.customerId){
                this.profileForm.setValue({
                name: cust.customerName, 
                email: cust.customerEmail,
                mobile: cust.customerMobile,
                address: cust.customerAddress, 
                password: cust.customerPassword,
              }); 
            }
      }
}

public  data:any;
  
    ngOnInit(): void {
      this.getData();
      this.submit();
      for(let cust of this.custData)
      {
        console.log(cust.customerId);
      }
      for(let i = 0; i< 10;i++)
      {
        console.log(i);
      }
    // for(let cust of this.custData){
      // console.log(cust.customerId);
    //   if(cust.customerId == this.data){
      // for(let cust of this.custData){
      //   // console.log(cust.customerEmail);
      //   if(cust.customerId==this.data){
      //    console.log(cust.customerId);
      //    alert("Login successful !");
      //   }}

//       for(let cust of this.custData){
//       if(this.data=='10'){
//       this.profileForm.setValue({
//       name: this.data, 
//       email: this.data,
//       mobile: this.data,
//       address: this.data, 
//       password: this.data,
//     }); 
//   }
// }
}
}
  



  
  // submitted = false;






  // TodayDate="2022-10-10";
  // date1 = new Date();
  // currentYear = this.date1.getUTCFullYear();
  // currentMonth = this.date1.getUTCMonth() + 1;
  // currentDay = this.date1.getUTCDate();
  // FinalMonth:any;
  // FinalDay:any;
  // update()
  // {
  //   this.email.setValue('yashjain9800@gmail.com');
  // }
  // updatedate()
  // {
  //   this.date.setValue(this.TodayDate);
  // }









  
    // if(this.currentMonth<10)
    // {
    //   this.FinalMonth = "0" + this.currentMonth;
    // }
    // else{
    //   this.FinalMonth = this.currentMonth;
    // }
    // if(this.currentDay<10)
    // {
    //   this.FinalDay = "0" + this.currentDay;
    // }
    // else{
    //   this.FinalDay = this.currentDay;
    // }
    // this.TodayDate = this.currentYear + "-" + this.currentMonth + "-" + this.currentDay




    
  //      console.log(this.route.snapshot.params?.['id']);
  //     this.userdataService.getCurrentData(this.route.snapshot.params?.['id']).subscribe((res)=>{
  //       this.profileForm = new FormGroup(
  //         {
  //           firstName:  new FormControl(res),
  //           // email:  new FormControl(res.['email']),
  //           mobile: new FormControl(res),
  //           address:new FormControl(res)
  //         });
  //     })
  //   }
  //   get f() { return this.profileForm.controls; }
  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   this.submitted = true;
  //   if (this.profileForm.invalid) {
  //     return;
  //   }
  //   console.warn(this.profileForm.value);
  
