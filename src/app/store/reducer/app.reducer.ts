import { createReducer, on } from "@ngrx/store";
import { filterData } from "../actions/app-actions";


export interface AppState {
  locations: null,
  charanters: null,
  episodes: null,
  filter: string
}
export const initialState: AppState = {
  locations:null,
  charanters: null,
  episodes: null,
  filter: '',
};

export const appReducer = createReducer(
  initialState,
  on(filterData, (state, {filterData}) => ({
    ...state,
    filter: filterData
  }))
);
