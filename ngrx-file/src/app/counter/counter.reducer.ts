import { createReducer, on } from '@ngrx/store';
import { increment1,increment2,increment3,increment4,increment5 } from './counter.actions';
import { CounterState } from './counter.state';

const initialState: CounterState = {
  count:0,
  count1:0,
  count2:0,
  count3:0,
  count4:0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment1, (state) => ({ ...state, count: state.count + 1 })),
  on(increment2, (state) => ({ ...state, count1: state.count1 + 1 })),
  on(increment3, (state) => ({ ...state, count2: state.count2 + 1 })),
  on(increment4, (state) => ({ ...state, count3: state.count3 + 1 })),
  on(increment5, (state) => ({ ...state, count4: state.count4 + 1 })),
);
