import { createReducer, on } from "@ngrx/store";
import { Locationss, LocationssDetail } from "../../models/locations";
import { filterLocationsSuccess, getAllSuccessLocationss, getLocationsDetailSuccess, resetLocationDetail } from "../actions/locations.actions";
export interface LocationsState {
  locations: Locationss
  detail: LocationssDetail
}
export const initialState: LocationsState = {
  locations: {
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: ''
    },
    results: []
  },
  detail: {
    id:       0,
  name:     '',
  dimension:  '',
  type:     '',
  residents:  [],
  url:      '',
  created:  new Date()
  }
};

export const LocationsReducer = createReducer(
  initialState,
  on(getAllSuccessLocationss, (state, {payload}) => ({
    ...state,
    locations: payload

  })),
  on(getLocationsDetailSuccess, (state, {payload}) => ({
    ...state,
    detail: payload

  })),
  on(resetLocationDetail, (state) => ({
    ...state,
    detail: initialState.detail

  })),
  on(filterLocationsSuccess, (state, {payload}) => ({
    ...state,
    locations: payload
  }))

);
