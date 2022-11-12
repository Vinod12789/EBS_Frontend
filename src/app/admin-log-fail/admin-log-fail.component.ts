import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-log-fail',
  templateUrl: './admin-log-fail.component.html',
  styleUrls: ['./admin-log-fail.component.css']
})
export class AdminLogFailComponent implements OnInit {

  constructor(public dialog :MatDialog ) { }

  ngOnInit(): void {
  }
  // dialogClose(){
  //    this.dialog.close;
  // }
}
