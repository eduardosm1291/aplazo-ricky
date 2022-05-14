import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Characters } from "../../models/characters";
import { CharacterState } from "../reducer/characters.reducer";


export const getCharacterState = createFeatureSelector<CharacterState>('charactersState');

export const getCharacterResult = createSelector(
  getCharacterState,
  (state: CharacterState) => state.character.results
);

export const getDetail = createSelector(
  getCharacterState,
  (state: CharacterState) => state.detail
);
