import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddpayComponent } from 'src/app/addpay/addpay.component';
import { DeleteServiceService } from 'src/app/delete-service.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

 

  ngOnInit(): void {
  }
  userData:any=[];
  custData:any=[];
 
  constructor( private deleteServiceService:DeleteServiceService ,private dialog:MatDialog,private userdataservice:UserdataService) { 
    this.userdataservice.getPaymentData().subscribe(dataa=>{
      this.userData=dataa;
    })
    this.userdataservice.getCustData().subscribe(data=>{
            this.custData=data;
          })
}
getPaymentData(){
  this.userdataservice.getPaymentData().subscribe(dataa=>{
    this.userData=dataa;
  })
}
delData(id: number){
  this.userdataservice.deletePayData(id).subscribe(data=>{
    this.getPaymentData();
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

AddPayment(){
  const dailogconfig=new MatDialogConfig();
    dailogconfig.disableClose=true;
    dailogconfig.autoFocus=true;
    dailogconfig.width="60%";
    this.dialog.open(AddpayComponent);
}

}
