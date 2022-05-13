import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CharactersService } from '../../services/characters.service';
import {  getAllCharacters, getCharacterDetail } from '../actions/characters.actions';

@Injectable()
export class CharactersEffects {

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCharacters),
      mergeMap(() => this.charactersService.getAllCharacters()
        .pipe(
          map(characters => ({ type: '[App Characters] getAll Success', payload: characters })),
          catchError(() => of({ type: '[App Characters] getAll Error' }))
        )
      )
    )
  );
  loadDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacterDetail),
      mergeMap((action) => this.charactersService.getCharactersDetail(action.payload)
        .pipe(
          map(item => ({ type: '[App Characters] get detail Success', payload: item })),
          catchError(() => of({ type: '[App Characters] get detail Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private charactersService: CharactersService
  ) {}
}
