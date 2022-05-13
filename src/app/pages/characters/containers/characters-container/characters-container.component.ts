import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharactersDetail } from '../../models/characters';
import { getAllCharacters, getCharacterDetail } from '../../store/actions/characters.actions';
import { getCharacterResult } from '../../store/selectors/characters.selectos';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.scss']
})
export class CharactersContainerComponent implements OnInit {
  dataSource$: any ;
  constructor(
    private readonly store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllCharacters());
    this.dataSource$ = this.store.pipe(select(getCharacterResult));

  }
  detail(row: CharactersDetail) {
    this.store.dispatch(getCharacterDetail({payload: row.id}));
  }

}
