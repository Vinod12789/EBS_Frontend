import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from'@angular/forms';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 alert: boolean = false;
  constructor(private authService: AuthService, private router:Router, private route:ActivatedRoute) { 
   
  }
  displayMsg:string=''; isAccountCreated:boolean = false;

  value='';


  
  ngOnInit(): void {
  }
  registerform= new FormGroup({
    name: new FormControl("",[Validators.required , Validators.minLength(2), Validators.pattern("[a-zA-Z ]*")]),
    email: new FormControl("",[Validators.required ,  Validators.email]),
    mobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    address: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  
    
 });
 senddata(){
  this.router.navigate(['/postlogincustomer'],
 {queryParams:{data:JSON.stringify(this.registerform.value.name)}})
  }
 registerSubmited(){
     this.authService.registerCustomer([
      this.registerform.value.name,
      this.registerform.value.email,
      this.registerform.value.mobile,
      this.registerform.value.address,
      this.registerform.value.password
     ]).subscribe(res => {
      console.log(res);
      alert("Registration successful !");
      this.senddata();
      this.registerform.reset({})
     })
     
    //  SaveData(value:any[])
    // {
    //   let data:any=value;
    //   this.router.navigate(['/invoice'],
    //   {queryParams:{data:JSON.stringify(data)}})
    // }

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
