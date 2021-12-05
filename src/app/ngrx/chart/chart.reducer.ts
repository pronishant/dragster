import { increment, decrement } from './counter.actions';
import { initState } from './chart.state';
import { createReducer, on } from "@ngrx/store";

const _counterReducer = createReducer(
  initState,
  on(increment, (state,action) => {
    console.log(action)
    return {
      ...state,
      counter: state.counter + Number(action.val),
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    };
  }),
)

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
