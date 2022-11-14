import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DeleteServiceService } from 'src/app/delete-service.service';
import { UserdataService } from 'src/app/userdata.service';
import { Customer } from '../../../customer.model';
import { AddcustComponent } from '../../addcust/addcust.component';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customer: Customer = new Customer();
  formValue!: FormGroup
  post='';
  @Input() parentposts: any[]=[];
  registerform: any;
  // deleteServiceService: any;
  
  constructor( private router:Router, private route:ActivatedRoute,private deleteServiceService:DeleteServiceService, private userdataservice:UserdataService, private formBuilder: FormBuilder, private authService: AuthService,private dailog:MatDialog) { 
    this.getData();
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:[''],
      name: [''],
      email:[''],
      mobile:[''],
      address:['']

    });


  }

  SaveData(value:any)
  {
    let data:any=value;
    this.router.navigate(['/updateUser'],
    {queryParams:{data:JSON.stringify(data)}})
  }
  AddPost(post:any){
    console.log(post);
    this.parentposts.push(post);
  }

  userData:any=[];
  getData(){
    this.userdataservice.getCustData().subscribe(dataa=>{
      this.userData=dataa;
    })
  }
  
delData(id: number){
  this.userdataservice.deleteCustData(id).subscribe(data=>{
    this.getData();
  })
}
deleteData(id: number){
  
  this.deleteServiceService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => 
      {
        if(confirmed==true)
      {
        this.delData(id);
      }
      }
      )
    
      // .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
      
    }
  

updateData(cus:Customer){
  this.customer.customerId = this.formValue.value.id;

  this.customer.customerName = this.formValue.value.name;

  this.customer.customerEmail = this.formValue.value.email;

  this.customer.customerMobile = this.formValue.value.mobile;

  this.userdataservice.updateData(this.customer).subscribe(res=>{

   alert("Updated Successfully");

  })

  }
onEdit(data: any){
  this.customer.customerId=data.id;

    this.formValue.controls['name'].setValue(data.name);

    this.formValue.controls['mobile'].setValue(data.email);

    this.formValue.controls['mobile'].setValue(data.mobile);

    this.formValue.controls['address'].setValue(data.address);
  
}
alertbtn()
{
  alert("Prachi Patidar");
}
Addcustomer(){
    const dailogconfig=new MatDialogConfig();
    dailogconfig.disableClose=true;
    dailogconfig.autoFocus=true;
    dailogconfig.width="60%";
    this.dailog.open(AddcustComponent);
  
    
  }
  
}



