import { createAction, props } from "@ngrx/store";

export const getAllEpisodes = createAction(
  '[App Episodes] getAll',
);
export const getAllSuccessEpisodes = createAction(
  '[App Episodes] getAll Success',
  props<{ payload: any }>()
);
export const getAllErrorEpisodes = createAction(
  '[App Episodes] getAll Error',
  props<{ error: any }>()
);


export const getEpisodesDetailAction = createAction(
  '[App Episodes] get detail',
  props<{ payload: number }>()
);
export const getEpisodesDetailSuccess = createAction(
  '[App Episodes] get detail Success',
  props<{ payload: any }>()
);
export const EpisodesError = createAction(
  '[App Episodes]  Error',
  props<{ error: any }>()
);
export const resetEpisodeDetail = createAction(
  '[App Episodes] reset detail',

);

export const filterEpisodes = createAction(
  '[App Episodes] filter Episodes ',
  props<{ payload: string }>()
);
export const filterEpisodesuccess = createAction(
  '[App Episodes] filter Episodes Success',
  props<{ payload: any }>()
);
