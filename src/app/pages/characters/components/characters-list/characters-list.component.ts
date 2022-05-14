import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CharactersDetail } from '../../models/characters';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnChanges {
  @Input()dataSource: any;
  @Input()pageInfo: any;
  @Output() characterDetail: EventEmitter<CharactersDetail> = new EventEmitter();
  @Output() page = new EventEmitter<PageEvent>();
  displayedColumns: string[] = ['id', 'name', 'status', 'specie'];
  pageEvent!: PageEvent ;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.pageEvent);
  }
  characterDeatail( item: CharactersDetail) {
    this.characterDetail.emit(item);
  }
  onChangePage(event: PageEvent) {
    console.log(event);
  }

}
