import { createAction, props } from "@ngrx/store";

export const getAllLocationss = createAction(
  '[App Locationss] getAll',
);
export const getAllSuccessLocationss = createAction(
  '[App Locationss] getAll Success',
  props<{ payload: any }>()
);
export const getAllErrorLocationss = createAction(
  '[App Locationss] getAll Error',
  props<{ error: any }>()
);


export const getLocationsDetail = createAction(
  '[App Locationss] get detail',
  props<{ payload: number }>()
);
export const getLocationsDetailSuccess = createAction(
  '[App Locationss] get detail Success',
  props<{ payload: any }>()
);
export const LocationsError = createAction(
  '[App Locationss]  Error',
  props<{ error: any }>()
);
export const resetDetail = createAction(
  '[App Locationss] reset detail',

);

export const filterLocations = createAction(
  '[App Locationss] filter Locations ',
  props<{ payload: string }>()
);
export const filterLocationsSuccess = createAction(
  '[App Locationss] filter Locations Success',
  props<{ payload: any }>()
);
