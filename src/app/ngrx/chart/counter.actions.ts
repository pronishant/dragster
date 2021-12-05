import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment', props<{val:number}>());
export const decrement = createAction('decrement');
