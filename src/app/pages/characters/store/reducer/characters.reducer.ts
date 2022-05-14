import { createReducer, on } from "@ngrx/store";
import { Characters, CharactersDetail } from "../../models/characters";
import { filterCharacterSuccess, getAllSuccessCharacters, getCharacterDetailSuccess, resetDetail } from "../actions/characters.actions";
export interface CharacterState {
  character: Characters
  detail: CharactersDetail
}
export const initialState: CharacterState = {
  character: {
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

export const characterReducer = createReducer(
  initialState,
  on(getAllSuccessCharacters, (state, {payload}) => ({
    ...state,
    character: payload

  })),
  on(getCharacterDetailSuccess, (state, {payload}) => ({
    ...state,
    detail: payload

  })),
  on(resetDetail, (state) => ({
    ...state,
    detail: initialState.detail

  })),
  on(filterCharacterSuccess, (state, {payload}) => ({
    ...state,
    character: payload
  }))

);
