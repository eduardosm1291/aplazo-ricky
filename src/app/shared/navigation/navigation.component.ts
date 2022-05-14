import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { filterData, resetFilterData } from 'src/app/store/actions/app-actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('searchBox') input!:any;
  inputValue: string = "";
  constructor(
    private store: Store,
    private actionsListener$: ActionsSubject
  ) { }

  ngOnInit(): void {
    this.actionsListener$.pipe(
      ofType(resetFilterData)
    ).subscribe( () => {
      this.input.nativeElement.value = '';
    }
    );
  }
  action(value: string) {
    this.inputValue = value;
    this.store.dispatch(filterData({payload: this.inputValue}))
  }

}
