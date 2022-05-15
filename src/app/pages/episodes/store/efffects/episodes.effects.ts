import { filterEpisodes, getAllEpisodes, getEpisodesDetailAction } from './../actions/episodes.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { EpisodesService } from "../../services/episodes.service";

@Injectable()
export class EpisodesEffects {

  loadEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllEpisodes),
      mergeMap(() => this.episodesService.getAllEpisodes()
        .pipe(
          map(Episodes => ({ type: '[App Episodes] getAll Success', payload: Episodes })),
          catchError(() => of({ type: '[App Episodes] getAll Error' }))
        )
      )
    )
  );
  loadDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEpisodesDetailAction),
      mergeMap((action) => this.episodesService.getEpisodeDetail(action.payload)
        .pipe(
          map(item => ({ type: '[App Episodes] get detail Success', payload: item })),
          catchError(() => of({ type: '[App Episodes] getAll Error' }))
        )
      )
    )
  );
  filter$ = createEffect(() =>
  this.actions$.pipe(
    ofType(filterEpisodes),
    mergeMap((action) => this.episodesService.filterEpisodes(action.payload)
      .pipe(
        map(item => ({ type: '[App Episodes] filter Episodes Success', payload: item })),
        catchError(() => of({ type: '[App Episodes] getAll Error' }))
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private episodesService: EpisodesService
  ) {}
}
