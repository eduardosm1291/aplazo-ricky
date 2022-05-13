import { createReducer, on } from "@ngrx/store";
import { Characters } from "../../models/characters";
import { getAllSuccessCharacters } from "../actions/characters.actions";
export interface CharacterState {
  character: Characters
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
  }
};

export const characterReducer = createReducer(
  initialState,
  on(getAllSuccessCharacters, (state, {payload}) => ({
    ...state,
    character: payload

  }))
);
