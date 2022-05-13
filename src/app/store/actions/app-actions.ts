import { createAction, props } from "@ngrx/store";

export const filterData = createAction(
  '[App] filter',
  props<{ filterData: string }>()
);
