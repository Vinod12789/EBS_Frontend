import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostadminlogincardComponent } from './postadminlogincard.component';

describe('PostadminlogincardComponent', () => {
  let component: PostadminlogincardComponent;
  let fixture: ComponentFixture<PostadminlogincardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostadminlogincardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostadminlogincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
