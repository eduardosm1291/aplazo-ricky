import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { resetFilterData } from 'src/app/store/actions/app-actions';
import { getFilter } from 'src/app/store/selector/app.selector';
import { CharactersDetailComponent } from '../../components/characters-detail/characters-detail.component';
import { CharactersDetail } from '../../models/characters';
import { filterCharacter, getAllCharacters, getCharacterDetail, resetDetail } from '../../store/actions/characters.actions';
import { getCharacterResult, getDetail, getInfo } from '../../store/selectors/characters.selectos';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.scss']
})
export class CharactersContainerComponent implements OnInit, OnDestroy {
  dataSource$: any ;
  dataInfo$: any;
  filterSuscriptionCharacter$!: Subscription;
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private readonly store: Store,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllCharacters());
    this.dataSource$ = this.store.pipe( select(getCharacterResult));
    this.dataInfo$ = this.store.pipe( select(getInfo));

    this.filterSuscriptionCharacter$ = this.store.pipe(select(getFilter),
    takeUntil(this.ngUnsubscribe)
    ).subscribe((filterData) =>{
      this.store.dispatch(filterCharacter({payload: filterData}));
    })

  }
  detail(row: CharactersDetail) {
    this.store.dispatch(getCharacterDetail({payload: row.id}));
    this.openDialog();

  }
  public getPaginatorData(event: PageEvent): PageEvent {
    console.log(event);
    return event;
  }

  openDialog(): void {
    this.store.pipe(
      select(getDetail),
      filter ((data) => data.id >0),
      take(1)).subscribe((data) => {
      const dialogRef = this.dialog.open(CharactersDetailComponent, {
        width: '650px',
        data
      });
      dialogRef.afterClosed().subscribe(result => {
        this.store.dispatch(resetDetail());
      });
    });
  }
  ngOnDestroy() {

    this.ngUnsubscribe.unsubscribe();
    this.filterSuscriptionCharacter$.unsubscribe();
    this.store.dispatch(resetFilterData())
  }

}
