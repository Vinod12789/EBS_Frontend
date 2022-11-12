import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatDialog} from '@angular/material/dialog';
import { AddbillComponent } from '../../addbill/addbill.component';
import { DeletebillComponent } from '../../deletebill/deletebill.component';
import { DeleteServiceService } from 'src/app/delete-service.service';
@Component({
  selector: 'app-billlist',
  templateUrl: './billlist.component.html',
  styleUrls: ['./billlist.component.css']
})
export class BilllistComponent implements OnInit {

  userData:any=[];
  DeleteServiceService: any;
  // notificationService: any;
  constructor( private deleteServiceService:DeleteServiceService , private userdataservice:UserdataService, private router:Router, private route:ActivatedRoute, private dailog:MatDialog) { 
    this.userdataservice.getCustData().subscribe(dataa=>{
      this.userData=dataa;
    })
}


// value='';

//  SaveData(value:any[])
//   {
//     let data:any=value;
//     this.router.navigate(['./invoice'],
//     {queryParams:{data:JSON.stringify(data)}})
//   }
AddBill(){
  const dailogconfig=new MatDialogConfig();
    dailogconfig.disableClose=true;
    dailogconfig.autoFocus=true;
    dailogconfig.width="60%";
    this.dailog.open(AddbillComponent);
}
getBillData(){
  this.userdataservice.getBillData().subscribe(dataa=>{
    this.userData=dataa;
    console.log(dataa);
  })
}
delData(id: number){
  this.userdataservice.deleteBillData(id).subscribe(data=>{
    this.getBillData();
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
  ngOnInit(): void {
    this.getBillData();
  }

}

  


