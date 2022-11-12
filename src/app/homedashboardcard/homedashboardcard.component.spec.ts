import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedashboardcardComponent } from './homedashboardcard.component';

describe('HomedashboardcardComponent', () => {
  let component: HomedashboardcardComponent;
  let fixture: ComponentFixture<HomedashboardcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedashboardcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomedashboardcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
