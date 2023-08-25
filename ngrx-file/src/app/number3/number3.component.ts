import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment3 } from '../counter/counter.actions';
import { CounterState } from '../counter/counter.state';

@Component({
  selector: 'app-number3',
  template: `
    <h2>Number 3 Component</h2>
    <button (click)="handleIncrementClick()">Increment</button>
    <p>Count: {{ count2 }}</p><hr>
  `,
})
export class Number3Component implements OnInit {
  count2: number = 0;

  constructor(private store: Store<{ counter: { count2: number } }>) {}

  ngOnInit() {
    this.store.select(state => state.counter.count2).subscribe(count => {
      this.count2= count;
    });
  }

  handleIncrementClick() {
    this.store.dispatch(increment3());
  }
}
