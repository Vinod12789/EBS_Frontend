import { Component, OnInit } from '@angular/core';
import { LoginCheck } from './login';
import { FormBuilder } from '@angular/forms';
import{FormControl,FormGroup,Validators}from'@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminLogFailComponent } from '../../admin-log-fail/admin-log-fail.component';
import { AdminLogSuccessComponent } from '../../admin-log-success/admin-log-success.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  alert:boolean=false
  constructor(public dialog :MatDialog ,private fb: FormBuilder,private router:Router,private route:ActivatedRoute,) { 
    this.loginform= this.fb.group({
    
      email: new FormControl("",[Validators.required ,  Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.requiredTrue ])
      
   });
  
  }
 loginform!: FormGroup;


  ngOnInit(): void {
  }
  

 loginSubmited(){
  this.alert=true;
  this.loginform.reset({});
  console.log(this.loginform.get("name"));
 }
 login!:LoginCheck;
 get email(): FormControl{
  return this.loginform.get("email") as FormControl;
 }
 
 get password(): FormControl{
  return this.loginform.get("password") as FormControl;
 }
 validateUSer(){
  
  this.login=this.loginform.value;
  if( this.login.email=="admin@gmail.com"&&this.login.password=="admin@123")
    {
      alert("Login successful !");
      this.loginform.reset({})
      this.router.navigate(['/postadminlogincard'])
    }
    else
    {
      alert("Please enter correct Email or Password!");
      this.loginform.reset({})
      
    }
     
 }
 closeAlert(){
  this.alert=false
}
}
