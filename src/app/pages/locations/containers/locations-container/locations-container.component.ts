import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { CharactersDetailComponent } from 'src/app/pages/characters/components/characters-detail/characters-detail.component';
import { resetFilterData } from 'src/app/store/actions/app-actions';
import { getFilter } from 'src/app/store/selector/app.selector';
import { LocationDetailComponent } from '../../components/location-detail/location-detail.component';
import { LocationssDetail } from '../../models/locations';
import { filterLocations, getAllLocationss, getLocationsDetailAction, resetLocationDetail } from '../../store/actions/locations.actions';
import { getLocationDetail, getLocationInfo, getLocationResult } from '../../store/selectors/locations.selectos';

@Component({
  selector: 'app-locations-container',
  templateUrl: './locations-container.component.html',
  styleUrls: ['./locations-container.component.scss']
})
export class LocationsContainerComponent implements OnInit, OnDestroy{

  dataSource$: any ;
  dataInfo$: any;
  filterSuscription$!: Subscription;
  private ngUnsubscribe = new Subject<void>();
  constructor(
    private readonly store: Store,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllLocationss());
    this.dataSource$ = this.store.pipe( select(getLocationResult));
    this.dataInfo$ = this.store.pipe( select(getLocationInfo));

    this.filterSuscription$ = this.store.pipe(
      select(getFilter),
      filter((data)  => data !== '')
    ).subscribe((filterData: string) => {
      this.store.dispatch(filterLocations({payload: filterData}));
    })

  }
  detail(row: LocationssDetail) {
    this.store.dispatch(getLocationsDetailAction({payload: row.id}));
    this.openDialog();

  }
  public getPaginatorData(event: PageEvent): PageEvent {
    console.log(event);
    return event;
  }

  openDialog(): void {
    this.store.pipe(
      select(getLocationDetail),
      filter ((data) => data.id >0),
      take(1)).subscribe((data) => {
      const dialogRef = this.dialog.open(LocationDetailComponent, {
        width: '650px',
        data
      });
      dialogRef.afterClosed().subscribe(result => {
        this.store.dispatch(resetLocationDetail());
      });
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.unsubscribe();
    this.filterSuscription$.unsubscribe();
    this.store.dispatch(resetFilterData())
  }
}
