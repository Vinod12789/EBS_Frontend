import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedeshComponent } from './homedesh.component';

describe('HomedeshComponent', () => {
  let component: HomedeshComponent;
  let fixture: ComponentFixture<HomedeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedeshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomedeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
