import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Number2Component } from './number2.component';

describe('Number2Component', () => {
  let component: Number2Component;
  let fixture: ComponentFixture<Number2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Number2Component]
    });
    fixture = TestBed.createComponent(Number2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
