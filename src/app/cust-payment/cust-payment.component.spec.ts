import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPaymentComponent } from './cust-payment.component';

describe('CustPaymentComponent', () => {
  let component: CustPaymentComponent;
  let fixture: ComponentFixture<CustPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
