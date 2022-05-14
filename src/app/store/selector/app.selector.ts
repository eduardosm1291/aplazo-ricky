import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducer/app.reducer";

export const appSatate = createFeatureSelector<AppState>('app');

export const getFilter = createSelector(
  appSatate,
  (state: AppState) => state.filter
);
