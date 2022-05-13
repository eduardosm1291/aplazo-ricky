import { createAction, props } from "@ngrx/store";
import { Characters } from "../../models/characters";

export const getAllCharacters = createAction(
  '[App Characters] getAll',
);
export const getAllSuccessCharacters = createAction(
  '[App Characters] getAll Success',
  props<{ payload: Characters }>()
);
export const getAllErrorCharacters = createAction(
  '[App Characters] getAll Error',
  props<{ characters: Characters }>()
);
