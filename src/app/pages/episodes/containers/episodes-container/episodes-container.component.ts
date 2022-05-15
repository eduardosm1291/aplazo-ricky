import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { LocationDetailComponent } from 'src/app/pages/locations/components/location-detail/location-detail.component';
import { resetFilterData } from 'src/app/store/actions/app-actions';
import { getFilter } from 'src/app/store/selector/app.selector';
import { EpisodeDetailComponent } from '../../components/episode-detail/episode-detail.component';
import { filterEpisodes, getAllEpisodes, getEpisodesDetailAction, resetEpisodeDetail } from '../../store/actions/episodes.actions';
import { getEpisodeDetail, getEpisodeInfo, getEpisodeResult } from '../../store/selectors/episodes.selectos';

@Component({
  selector: 'app-episodes-container',
  templateUrl: './episodes-container.component.html',
  styleUrls: ['./episodes-container.component.scss']
})
export class EpisodesContainerComponent implements OnInit {

  dataSource$: any ;
  dataInfo$: any;
  filterSuscription$!: Subscription;
  constructor(
    private readonly store: Store,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllEpisodes());
    this.dataSource$ = this.store.pipe( select(getEpisodeResult));
    this.dataInfo$ = this.store.pipe( select(getEpisodeInfo));

    this.filterSuscription$ = this.store.pipe(
      select(getFilter),
    ).subscribe((filterData: string) => {
      this.store.dispatch(filterEpisodes({payload: filterData}));
    })

  }
  detail(row: any) {
    this.store.dispatch(getEpisodesDetailAction({payload: row.id}));
    this.openDialog();

  }
  public getPaginatorData(event: PageEvent): PageEvent {
    console.log(event);
    return event;
  }

  openDialog(): void {
    this.store.pipe(
      select(getEpisodeDetail),
      filter ((data) => data.id >0),
      take(1)).subscribe((data) => {
      const dialogRef = this.dialog.open(EpisodeDetailComponent, {
        width: '650px',
        data
      });
      dialogRef.afterClosed().subscribe(result => {
        this.store.dispatch(resetEpisodeDetail());
      });
    });
  }
  ngOnDestroy() {
    this.filterSuscription$.unsubscribe();
    this.store.dispatch(resetFilterData())
  }
}
