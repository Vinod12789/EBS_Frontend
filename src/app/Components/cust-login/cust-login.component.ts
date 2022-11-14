// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../auth.service';
// import{FormControl,FormGroup,Validators}from'@angular/forms';
// import { Customer } from 'src/customer.model';
// import { User } from 'src/app/user.model';
// import { UserdataService } from 'src/app/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-cust-login',
//   templateUrl: './cust-login.component.html',
//   styleUrls: ['./cust-login.component.css']
// })
// export class CustLoginComponent implements OnInit {
//   alert:boolean=false;
//   user = new User();
//   loginform: FormGroup<{ email: FormControl<string | null>; password: FormControl<string | null>; }>;
  
//   constructor(private authService: AuthService) {
//     this.loginform= new FormGroup({
    
//       email: new FormControl("",[Validators.required ,  Validators.email]),
//       password: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)])
     
//    });
//    }

//   ngOnInit(): void {
//   }
   


//   loginSubmited(){
//    this.alert=true;
//  this.loginform.reset({});
//    console.log(this.loginform.get("name"));
//   }
 
//   get email(): FormControl{
//    return this.loginform.get("email") as FormControl;
//   }
//    get password(): FormControl{
//   return this.loginform.get("password") as FormControl;
//   }
//  login(user: User){
//   this.authService.login(user).subscribe((token: string)=>{
//     localStorage.setItem('authToken: ', token);
//     console.log(token);
//   })
//  }
//  validateUSer(){
//   debugger;
//   this.login=this.loginform.value;
//   if( this.login.email=="admin@gmail.com"&&this.login.password=="admin@123")
//     {
//       this.dialog.open(AdminLogSuccessComponent,{width:'500px',height:'300px'})
//       location.replace("postadminlogincard");
//     }
//     else
//     {
//       this.dialog.open(AdminLogFailComponent,{width:'500px',height:'300px'})
//     }
     
//  }
 
//  closeAlert(){
//   this.alert=false
// }
// }
import { LoginCheck } from '../admin-login/login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import{FormControl,FormGroup,Validators}from'@angular/forms';
import { Customer } from 'src/customer.model';
import { User } from 'src/app/user.model';
import { UserdataService } from 'src/app/userdata.service';


@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent implements OnInit {
  alertmsg:boolean=false;
  user = new User();
  login!:LoginCheck;
  custData:any=[];
  // loginform!:FormGroup;
  constructor( private userdataservice:UserdataService,private router:Router,private route:ActivatedRoute, private authService: AuthService, private http:HttpClient, private fb: FormBuilder, private userService: UserdataService) { 
  //       this.loginform= this.fb.group({
    
  //     email: new FormControl("",[Validators.required ,  Validators.email]),
  //     password: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)])
     
  //  });
  this.userdataservice.getCustData().subscribe(data=>{
    this.custData=data;
  })
  }

  ngOnInit(): void {
  }
  
  loginform = new FormGroup({
    // name: new FormControl("",[Validators.required , Validators.minLength(2), Validators.pattern("[a-zA-Z ]*")]),
    email: new FormControl("",[Validators.required ,  Validators.email]),
    // mobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    // address: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  
    
 }); 
  
 senddata(value:any){
  this.router.navigate(['/postlogincustomer'],
 {queryParams:{data:JSON.stringify(value)}})
  }
public i:any=0;
  loginSubmited(){
    // let i:any=0;
    let cust:any;
    for(let cust of this.custData){
      // console.log(cust.customerEmail);
      if(cust.customerEmail==this.loginform.value.email && cust.customerPassword==this.loginform.value.password){
       console.log(this.loginform.value.email, this.loginform.value.password);
       alert("Login successful !");
       this.senddata(this.loginform.value.email);
       console.log(this.loginform.value.email);
      //  this.sendMail(this.loginform.value.email);
       this.loginform.reset({})
      this.i++;
    
      
      
      }}
      // else{
      //   // alert("Login Unsuccessful !");
      // continue
      // }

if(this.i==0){
    alert("Login Unsuccessful !");
    this.loginform.reset({});
}
      // }else{
      //   // alert("Invalid Credentials");
      //   this.loginform.reset({})
      //   continue
      // }
    
      }
      // sendMail(cus: any){
      //   return this.userdataservice.MailCustomer(this.loginform.value.email).subscribe(res=>{
      //     this.custData= res;
      //     console.log("MAil");
      //   })
      // }

      get email(): FormControl{
        return this.loginform.get("email") as FormControl;
       }
        get password(): FormControl{
       return this.loginform.get("password") as FormControl;
       }
       closeAlert(){
        this.alertmsg=false
      }
    }

//     this.login = this.loginform.value;
   
//     this.authService.login(this.loginform.value).subscribe((res)=>{
//        console.log(res);
//       if(res.result == "true"){
//         this.alertmsg = true;
//         alert('Login Successful');
        
//       }
//       else{
//         this.alertmsg = false;
//         alert('Login UnSuccessful');
//       }
//     });
    
//    this.alertmsg=true;
//  this.loginform.reset({});
//    console.log(this.loginform.get("name"));

  // }
  
  

//  login(user: User){
//   this.authService.login(user).subscribe((token: string)=>{
//     localStorage.setItem('authToken: ', token);
//     console.log(token);
//this.route.queryParams.subscribe((params)=>{console.log(params);
 // this.data=JSON.parse(params['data']);
//   })
//  }
//  closeAlert(){
//   this.alertmsg=false
// }








