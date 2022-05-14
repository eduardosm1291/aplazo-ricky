import { createReducer, on } from "@ngrx/store";
import { filterData, resetFilterData } from "../actions/app-actions";


export interface AppState {

  filter: string
}
export const initialState: AppState = {

  filter: '',
};

export const appReducer = createReducer(
  initialState,
  on(filterData, (state, {payload}) => ({
    ...state,
    filter: payload
  })),
  on(resetFilterData, (state) => ({
    ...state,
    filter: initialState.filter
  }))
);
