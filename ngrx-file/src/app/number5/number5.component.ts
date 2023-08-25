import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment5 } from '../counter/counter.actions';
import { CounterState } from '../counter/counter.state';

@Component({
  selector: 'app-number5',
  template: `
    <h2>Number 5 Component</h2>
    <button (click)="handleIncrementClick()">Increment</button>
    <p>Count: {{ count4 }}</p><hr>
  `,
})
export class Number5Component implements OnInit {
  count4: number = 0;

  constructor(private store: Store<{ counter: { count4: number } }>) {}

  ngOnInit() {
    this.store.select(state => state.counter.count4).subscribe(count => {
      this.count4 = count;
    });
  }

  handleIncrementClick() {
    console.log('Increment button clicked');
    this.store.dispatch(increment5());
  }
}
