import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment,decrement,reset } from './counter/counter.actions';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-counter></app-counter>
      <div>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset</button>
      </div>
    </div>
  `,
})
export class AppComponent {
  constructor(private store: Store<{ counter: number }>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
