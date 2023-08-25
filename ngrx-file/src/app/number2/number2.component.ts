import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment2 } from '../counter/counter.actions';
import { CounterState } from '../counter/counter.state';

@Component({
  selector: 'app-number2',
  template: `
    <h2>Number 2 Component</h2>
    <button (click)="handleIncrementClick()">Increment</button>
    <p>Count: {{ count1 }}</p><hr>
  `,
})
export class Number2Component implements OnInit {
  count1: number = 0;

  constructor(private store: Store<{ counter: { count1: number } }>) {}

  ngOnInit() {
    this.store.select(state => state.counter.count1).subscribe(count => {
      this.count1 = count;
    });
  }

  handleIncrementClick() {
    console.log('Increment button clicked');
    this.store.dispatch(increment2());
  }
}
