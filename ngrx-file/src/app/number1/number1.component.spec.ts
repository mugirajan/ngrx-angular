import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Number1Component } from './number1.component';

describe('Number1Component', () => {
  let component: Number1Component;
  let fixture: ComponentFixture<Number1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Number1Component]
    });
    fixture = TestBed.createComponent(Number1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
