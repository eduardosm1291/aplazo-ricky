import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Episodestate } from "../reducer/episodes.reducer";

export const getEpisodeState = createFeatureSelector<Episodestate>('episodesState');

export const getEpisodeResult = createSelector(
  getEpisodeState,
  (state: Episodestate) => state.episodes.results
);

export const getEpisodeDetail = createSelector(
  getEpisodeState,
  (state: Episodestate) => state.detail
);
export const getEpisodeInfo = createSelector(
  getEpisodeState,
  (state: Episodestate) => state.episodes.info
);
