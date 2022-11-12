import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-testlogin',
  templateUrl: './testlogin.component.html',
  styleUrls: ['./testlogin.component.css']
})
export class TestloginComponent implements OnInit {

  alert:boolean=false;
  user = new User();
  loginForm!:FormGroup;
  constructor(private authService: AuthService,private formBuilder:FormBuilder,private _http:HttpClient,private router:Router) { }

  logIn(){
    this._http.get<any>("http://localhost:5003/api/Customers").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password == this.loginForm.value.password
  
      })
      if(user){
        alert(" Login Successfull");
        this.loginform.reset();
        this.router.navigate(['postcustomerlogin'])
      }
      else{
        alert("Invalid Credentials");
      }
    },err=>{
       alert("something is missing,server side");
    }
    )
  }
  

  ngOnInit(): void {
  }
   loginform= new FormGroup({
    
     email: new FormControl("",[Validators.required ,  Validators.email]),
     password: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)])
    
  });


  loginSubmited(){
   this.alert=true;
 this.loginform.reset({});
   console.log(this.loginform.get("name"));
  }
 
  get email(): FormControl{
   return this.loginform.get("email") as FormControl;
  }
   get password(): FormControl{
  return this.loginform.get("password") as FormControl;
  }
//  login(user: User){
//   this.authService.login(user).subscribe((token: string)=>{
//     localStorage.setItem('authToken: ', token);
//     console.log(token);
//   })
//  }
 closeAlert(){
  this.alert=false
}

}
