import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Number5Component } from './number5.component';

describe('Number5Component', () => {
  let component: Number5Component;
  let fixture: ComponentFixture<Number5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Number5Component]
    });
    fixture = TestBed.createComponent(Number5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
