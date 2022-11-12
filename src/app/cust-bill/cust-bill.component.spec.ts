import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustBillComponent } from './cust-bill.component';

describe('CustBillComponent', () => {
  let component: CustBillComponent;
  let fixture: ComponentFixture<CustBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
