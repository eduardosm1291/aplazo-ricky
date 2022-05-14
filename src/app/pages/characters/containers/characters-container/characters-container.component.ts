import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { getFilter } from 'src/app/store/selector/app.selector';
import { CharactersDetailComponent } from '../../components/characters-detail/characters-detail.component';
import { CharactersDetail } from '../../models/characters';
import { filterCharacter, getAllCharacters, getCharacterDetail, resetDetail } from '../../store/actions/characters.actions';
import { getCharacterResult, getDetail } from '../../store/selectors/characters.selectos';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.scss']
})
export class CharactersContainerComponent implements OnInit, OnDestroy {
  dataSource$: any ;
  subscription!: Subscription;
  constructor(
    private readonly store: Store,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllCharacters());
    this.dataSource$ = this.store.pipe( select(getCharacterResult));
    this.store.pipe(select(getFilter)).subscribe((filterData) =>{
      this.store.dispatch(filterCharacter({payload: filterData}));
    })

  }
  detail(row: CharactersDetail) {
    this.store.dispatch(getCharacterDetail({payload: row.id}));
    this.openDialog();

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
    this.subscription.unsubscribe();
  }

}
