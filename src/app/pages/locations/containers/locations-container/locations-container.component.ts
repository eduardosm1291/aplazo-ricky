import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { CharactersDetailComponent } from 'src/app/pages/characters/components/characters-detail/characters-detail.component';
import { filterCharacter, getAllCharacters, getCharacterDetail, resetDetail } from 'src/app/pages/characters/store/actions/characters.actions';
import { getCharacterResult, getDetail, getInfo } from 'src/app/pages/characters/store/selectors/characters.selectos';
import { getFilter } from 'src/app/store/selector/app.selector';

@Component({
  selector: 'app-locations-container',
  templateUrl: './locations-container.component.html',
  styleUrls: ['./locations-container.component.scss']
})
export class LocationsContainerComponent implements OnInit, OnDestroy{

  dataSource$: any ;
  dataInfo$: any;
  subscription!: Subscription;
  constructor(
    private readonly store: Store,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllCharacters());
    this.dataSource$ = this.store.pipe( select(getCharacterResult));
    this.dataInfo$ = this.store.pipe( select(getInfo));

    this.store.pipe(select(getFilter)).subscribe((filterData: any) =>{
      this.store.dispatch(filterCharacter({payload: filterData}));
    })

  }
  detail(row: any) {
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
  }
}
