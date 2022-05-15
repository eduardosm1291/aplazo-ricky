import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

  @Input()dataSource: any;
  @Input()pageInfo: any;
  @Output() episodeDetail: EventEmitter<any> = new EventEmitter();
  @Output() page = new EventEmitter<PageEvent>();
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode'];
  pageEvent!: PageEvent ;
  constructor() { }

  ngOnInit(): void {
  }

  episodeDetailEmit( item: any) {
    this.episodeDetail.emit(item);
  }
  onChangePage(event: PageEvent) {
    console.log(event);
  }

}
