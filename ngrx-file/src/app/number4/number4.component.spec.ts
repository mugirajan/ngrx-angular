import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Number4Component } from './number4.component';

describe('Number4Component', () => {
  let component: Number4Component;
  let fixture: ComponentFixture<Number4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Number4Component]
    });
    fixture = TestBed.createComponent(Number4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
