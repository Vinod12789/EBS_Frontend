import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from'@angular/forms';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { UserData } from '../UserData';
import { Customer } from '../../customer.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 alert: boolean = false;
  constructor(private authService: AuthService, private http: HttpClient, private router:Router, private route:ActivatedRoute, private userDataService: UserdataService) { 
   
  }
  cusData: any= []
  cus!:Customer;
  displayMsg:string=''; isAccountCreated:boolean = false;

  value='';

user!: UserData;
registerform!: FormGroup
  
  ngOnInit(): void {
    this.registerform= new FormGroup({
      name: new FormControl("",[Validators.required , Validators.minLength(2), Validators.pattern("[a-zA-Z ]*")]),
      email: new FormControl("",[Validators.required ,  Validators.email]),
      mobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("[0-9]*")]),
      address: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    
      
   });
  }
  
 senddata(){
  this.router.navigate(['/postlogincustomer'],
 {queryParams:{data:JSON.stringify(this.registerform.value.name)}})
  }
 registerSubmited(){
  this.user = this.registerform.value;
  this.cus = this.registerform.value;
     this.authService.registerCustomer([
      this.registerform.value.name,
      this.registerform.value.email,
      this.registerform.value.mobile,
      this.registerform.value.address,
      this.registerform.value.password
     ]).subscribe(res => {
      this.cusData=res;
      console.log(res);
      alert("Registration successful !");
      this.senddata();
     
      console.log(this.registerform.value.email)
      this.MailCustomer(this.user)
      //this.sendMail(this.cus);
      this.registerform.reset({})
     })
     
    //  SaveData(value:any[])
    // {
    //   let data:any=value;
    //   this.router.navigate(['/invoice'],
    //   {queryParams:{data:JSON.stringify(data)}})
    // }

 }
 MailCustomer(user: UserData){
  let apiurl=("http://localhost:5003/api/Email");
  return this.http.post(apiurl, user).subscribe(res=>{
    this.cusData = res;
    console.log("MAil");
  });
   
 }
 sendMail(cus: Customer){
  debugger;
  console.log(this.cus.customerEmail)
  return this.userDataService.MailCustomer(cus).subscribe(res=>{
    this.cusData= res;
    console.log("Mail");
  })
}

get name(): FormControl{
  return this.registerform.get("name") as FormControl;
 }
 get email(): FormControl{
  return this.registerform.get("email") as FormControl;
 }
 get mobile(): FormControl{
  return this.registerform.get("mobile") as FormControl;
 }
 get password(): FormControl{
  return this.registerform.get("password") as FormControl;
 }
 get address(): FormControl{
  return this.registerform.get("address") as FormControl;
 }

 closeAlert(){
  this.alert=false
}

}
