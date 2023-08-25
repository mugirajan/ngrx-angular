import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment3 } from '../counter/counter.actions';
import { CounterState } from '../counter/counter.state';

@Component({
  selector: 'app-number3',
  template: `
    <h2>Number 3 Component</h2>
    <button (click)="handleIncrementClick()">Increment</button>
    <p>Count: {{ count }}</p><hr>
  `,
})
export class Number3Component implements OnInit {
  count: number = 0;

  constructor(private store: Store<{ counter: { count: number } }>) {}

  ngOnInit() {
    this.store.select(state => state.counter.count).subscribe(count => {
      this.count = count;
    });
  }

  handleIncrementClick() {
    console.log('Increment button clicked');
    this.store.dispatch(increment3());
  }
}
