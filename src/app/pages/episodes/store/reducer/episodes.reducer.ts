import { getAllSuccessEpisodes, getEpisodesDetailSuccess, resetEpisodeDetail, filterEpisodesuccess } from './../actions/episodes.actions';
import { EpisodeDetail, Episodes } from './../../models/episodes';
import { createReducer, on } from "@ngrx/store";
export interface Episodestate {
  episodes: Episodes
  detail: EpisodeDetail
}
export const initialState: Episodestate = {
  episodes: {
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
  air_date:  '',
  episode:     '',
  characters:  [],
  url:      '',
  created:  new Date()
  }
};

export const episodesReducer = createReducer(
  initialState,
  on(getAllSuccessEpisodes, (state, {payload}) => ({
    ...state,
    episodes: payload

  })),
  on(getEpisodesDetailSuccess, (state, {payload}) => ({
    ...state,
    detail: payload

  })),
  on(resetEpisodeDetail, (state) => ({
    ...state,
    detail: initialState.detail

  })),
  on(filterEpisodesuccess, (state, {payload}) => ({
    ...state,
    episodes: payload
  }))

);
