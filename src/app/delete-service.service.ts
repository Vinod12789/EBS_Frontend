import { INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeletebillComponent } from './deletebill/deletebill.component';

@Injectable()
export class DeleteServiceService {

  constructor(private modalService: NgbModal) { }
 
 
  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    btnIntimate: string= 'Notify',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {

    const modalRef = this.modalService.open(DeletebillComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    modalRef.componentInstance.btnIntimate = btnIntimate;

    return modalRef.result;
  }
}
