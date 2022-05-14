import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterData } from 'src/app/store/actions/app-actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  inputValue: string = "";


  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }
  action(value: string) {
    this.inputValue = value;
    this.store.dispatch(filterData({payload: this.inputValue}))
  }

}
