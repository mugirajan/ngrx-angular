import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment4 } from '../counter/counter.actions';
import { CounterState } from '../counter/counter.state';

@Component({
  selector: 'app-number4',
  template: `
    <h2>Number 4 Component</h2>
    <button (click)="handleIncrementClick()">Increment</button>
    <p>Count: {{ count3 }}</p><hr>
  `,
})
export class Number4Component implements OnInit {
  count3: number = 0;

  constructor(private store: Store<{ counter: { count3: number } }>) {}

  ngOnInit() {
    this.store.select(state => state.counter.count3).subscribe(count => {
      this.count3 = count;
    });
  }

  handleIncrementClick() {
   
    this.store.dispatch(increment4());
  }
}
