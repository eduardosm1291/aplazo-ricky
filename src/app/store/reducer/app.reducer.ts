import { createReducer, on } from "@ngrx/store";
import { filterData } from "../actions/app-actions";


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
  }))
);
