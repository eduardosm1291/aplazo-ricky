import { createAction, props } from "@ngrx/store";
import { Characters, CharactersDetail } from "../../models/characters";

export const getAllCharacters = createAction(
  '[App Characters] getAll',
);
export const getAllSuccessCharacters = createAction(
  '[App Characters] getAll Success',
  props<{ payload: Characters }>()
);
export const getAllErrorCharacters = createAction(
  '[App Characters] getAll Error',
  props<{ error: any }>()
);


export const getCharacterDetail = createAction(
  '[App Characters] get detail',
  props<{ payload: number }>()
);
export const getCharacterDetailSuccess = createAction(
  '[App Characters] get detail Success',
  props<{ payload: CharactersDetail }>()
);
export const getCharacterDetailError = createAction(
  '[App Characters] get detail Error',
  props<{ error: any }>()
);
