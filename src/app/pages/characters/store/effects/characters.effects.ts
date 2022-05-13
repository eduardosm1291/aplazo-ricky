import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CharactersService } from '../../services/characters.service';
import {  getAllCharacters } from '../actions/characters.actions';

@Injectable()
export class CharactersEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCharacters),
      mergeMap(() => this.charactersService.getAllCharacters()
        .pipe(
          map(movies => ({ type: '[App Characters] getAll Success', payload: movies })),
          catchError(() => of({ type: '[App Characters] getAll Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private charactersService: CharactersService
  ) {}
}
