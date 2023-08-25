import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Counter: {{ count$ | async }}</h2>
    </div>
  `,
})
export class CounterComponent {
  count$ = this.store.select(state => state.counter);

  constructor(private store: Store<{ counter: number }>) {}
}
