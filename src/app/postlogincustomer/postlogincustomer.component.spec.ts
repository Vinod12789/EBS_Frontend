import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlogincustomerComponent } from './postlogincustomer.component';

describe('PostlogincustomerComponent', () => {
  let component: PostlogincustomerComponent;
  let fixture: ComponentFixture<PostlogincustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlogincustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostlogincustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
