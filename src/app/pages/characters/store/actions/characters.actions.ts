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
export const characterError = createAction(
  '[App Characters]  Error',
  props<{ error: any }>()
);
export const resetDetail = createAction(
  '[App Characters] reset detail',

);

export const filterCharacter = createAction(
  '[App Characters] filter Character ',
  props<{ payload: string }>()
);
export const filterCharacterSuccess = createAction(
  '[App Characters] filter Character Success',
  props<{ payload: Characters }>()
);
