import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { LocationsService } from "../../services/locations.service";
import { filterLocations, getAllLocationss, getLocationsDetail } from "../actions/locations.actions";

@Injectable()
export class LocationssEffects {

  loadLocationss$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllLocationss),
      mergeMap(() => this.LocationssService.getAllLocationss()
        .pipe(
          map(Locationss => ({ type: '[App Locationss] getAll Success', payload: Locationss })),
          catchError(() => of({ type: '[App Locationss]  Error' }))
        )
      )
    )
  );
  loadDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLocationsDetail),
      mergeMap((action) => this.LocationssService.getLocationssDetail(action.payload)
        .pipe(
          map(item => ({ type: '[App Locationss] get detail Success', payload: item })),
          catchError(() => of({ type: '[App Locationss]  Error' }))
        )
      )
    )
  );
  filter$ = createEffect(() =>
  this.actions$.pipe(
    ofType(filterLocations),
    mergeMap((action) => this.LocationssService.filterLocations(action.payload)
      .pipe(
        map(item => ({ type: '[App Locationss] filter Locations Success', payload: item })),
        catchError(() => of({ type: '[App Locationss]  Error' }))
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private LocationssService: LocationsService
  ) {}
}
