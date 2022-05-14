import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LocationsState } from "../reducer/locations.reducer";

export const getLocationState = createFeatureSelector<LocationsState>('locationState');

export const getLocationResult = createSelector(
  getLocationState,
  (state: LocationsState) => state.locations.results
);

export const getLocationDetail = createSelector(
  getLocationState,
  (state: LocationsState) => state.detail
);
export const getLocationInfo = createSelector(
  getLocationState,
  (state: LocationsState) => state.locations.info
);
