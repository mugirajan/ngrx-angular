import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './counter.actions';
import { CounterState } from './counter.state';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter Component</h2>
    <button (click)="handleIncrementClick()">Increment</button>
    <p>Count: {{ count }}</p>
  `,
})
export class CounterComponent {
  count: number = 0;

  constructor(private store: Store<{ counter: CounterState }>) {
    this.store.select(state => state.counter.count).subscribe(count => {
      this.count = count;
    });
  }

  handleIncrementClick() {
    this.store.dispatch(increment());
  }
}
