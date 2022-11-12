import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogFailComponent } from './admin-log-fail.component';

describe('AdminLogFailComponent', () => {
  let component: AdminLogFailComponent;
  let fixture: ComponentFixture<AdminLogFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLogFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLogFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
