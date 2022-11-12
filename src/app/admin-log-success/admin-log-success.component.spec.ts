import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogSuccessComponent } from './admin-log-success.component';

describe('AdminLogSuccessComponent', () => {
  let component: AdminLogSuccessComponent;
  let fixture: ComponentFixture<AdminLogSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLogSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
