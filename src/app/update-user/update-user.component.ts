import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  // email = new FormControl('');
  // date = new FormControl('');

  constructor(private authService: AuthService, private fb:FormBuilder, private userdataService: UserdataService, private route: ActivatedRoute,  private router:Router) {
    
    // this.getData();
    this.route.queryParams.subscribe((params)=>{console.log(params);
      this.data=JSON.parse(params['data']);
      })
      this.profileForm = this.fb.group({
        name: new FormControl(''),
        email: new FormControl(''),
        mobile:new FormControl(''),
        address: new FormControl(''),
        password: new FormControl(''),
        date: new FormControl('')
        });
      
   }
  custData:any=[];
  getData(){
    this.userdataService.getCustData().subscribe(dataa=>{
      this.custData=dataa;
     })
   }
  profileForm!: FormGroup;

  

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
                date: '10-10-2022'
              }); 
            }
      }
}

public  data:any;

TodayDate="2022-10-10";
  date1 = new Date();
  currentYear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentDay = this.date1.getUTCDate();
  FinalMonth:any;
  FinalDay:any;
  

  // updatedate()
  // {
  //   this.date.setValue(this.TodayDate);
  // }

  
    ngOnInit(): void {
      this.userdataService.getCurrentData(this.route.snapshot.params?.['id']).subscribe((res: any)=>{
              this.profileForm = this.fb.group(
                {
                  firstName:  new FormControl(res['customerName']),
                   email:  new FormControl(res['customerEmail']),
                  mobile: new FormControl(res['mobile']),
                  address:new FormControl(res['address']),
            
                });
            })
          
  //     for(let cust of this.custData){
  //       console.log(cust);
  //     if(this.data=this.custData){
  //     this.profileForm.setValue({
  //     name: this.data, 
  //     email: this.data,
  //     mobile: this.data,
  //     address: this.data, 
  //     password: this.data,
  //     date : this.TodayDate
  //   }); 
  // }}
      this.getData();
      this.submit();
      
      for(let cust of this.custData)
      {
        console.log(cust.customerName);
      }
      for(let i = 0; i< this.custData.size;i++)
      {
        console.log(i);
      }
    // for(let cust of this.custData){
    //   console.log(cust.customerId);
    //   if(cust.customerId == this.data){
    //   for(let cust of this.custData){
    //      console.log(cust.customerEmail);
    //     if(cust.customerId==this.data){
    //      console.log(cust.customerId);
    //      alert("Login successful !");
    //     }}

      // for(let cust of this.custData){
        if(this.currentMonth<10)
        {
          this.FinalMonth = "0" + this.currentMonth;
        }
        else{
          this.FinalMonth = this.currentMonth;
        }
        if(this.currentDay<10)
        {
          this.FinalDay = "0" + this.currentDay;
        }
        else{
          this.FinalDay = this.currentDay;
        }
        this.TodayDate = this.currentYear + "-" + this.currentMonth + "-" + (this.currentDay)
       
        this.userdataService.getCustData().subscribe(dataa=>{
          this.custData=dataa;
        })
    

  

}
updateSubmited(id:any){
  this.authService.UpdateCustomer(id,[
   this.profileForm.value.CustomerName,
   this.profileForm.value.CustomerEmail,
   this.profileForm.value.CustomerMobile,
   this.profileForm.value.CustomerAddress,
   this.profileForm.value.CustomerPassword
   
   // this.registerform.reset({})
  ]).subscribe(res => {this.data = res.id
   // if(res=='Success'){
   //   this.displayMsg = 'Account Created Successfully!';
   //   this.isAccountCreated=true;
   // }
   
  })
}
get name(): FormControl{
  return this.profileForm.get("customerName") as FormControl;
 }
 get email(): FormControl{
  return this.profileForm.get("customerEmail") as FormControl;
 }
 get mobile(): FormControl{
  return this.profileForm.get("customerMobile") as FormControl;
 }
 
 get address(): FormControl{
  return this.profileForm.get("customerAddress") as FormControl;
 }
 get password(): FormControl{
  return this.profileForm.get("customerPassword") as FormControl;
 }
}
  



  
  // submitted = false;






  








  
   




    
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
  
