import { createReducer, on } from "@ngrx/store";
import { Locationss, LocationssDetail } from "../../models/locations";
import { filterLocationsSuccess, getAllSuccessLocationss, getLocationsDetailSuccess, resetDetail } from "../actions/locations.actions";
export interface LocationsState {
  Locations: Locationss
  detail: LocationssDetail
}
export const initialState: LocationsState = {
  Locations: {
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
    status:   '',
    species:  '',
    type:     '',
    gender:   '',

    image:    '',
    episode:  [],
    url:      '',
    created:  new Date(),
    name:     '',
  }
};

export const LocationsReducer = createReducer(
  initialState,
  on(getAllSuccessLocationss, (state, {payload}) => ({
    ...state,
    Locations: payload

  })),
  on(getLocationsDetailSuccess, (state, {payload}) => ({
    ...state,
    detail: payload

  })),
  on(resetDetail, (state) => ({
    ...state,
    detail: initialState.detail

  })),
  on(filterLocationsSuccess, (state, {payload}) => ({
    ...state,
    Locations: payload
  }))

);
