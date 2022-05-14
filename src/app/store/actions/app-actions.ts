import { createAction, props } from "@ngrx/store";

export const filterData = createAction(
  '[App] filter',
  props<{ payload: string }>()
);
export const resetFilterData = createAction(
  '[App] Reset filter Data',

);
