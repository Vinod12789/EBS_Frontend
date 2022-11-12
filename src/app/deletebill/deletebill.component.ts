import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deletebill',
  templateUrl: './deletebill.component.html',
  styleUrls: ['./deletebill.component.css']
})
export class DeletebillComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() btnOkText: string | undefined;
  @Input() btnCancelText: string | undefined;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
