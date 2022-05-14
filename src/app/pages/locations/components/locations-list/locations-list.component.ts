import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {
  @Input()dataSource: any;
  @Input()pageInfo: any;
  @Output() locationDetail: EventEmitter<any> = new EventEmitter();
  @Output() page = new EventEmitter<PageEvent>();
  displayedColumns: string[] = ['id', 'name', 'status', 'specie'];
  pageEvent!: PageEvent ;
  constructor() { }

  ngOnInit(): void {
  }

  locationDetailEmit( item: any) {
    this.locationDetail.emit(item);
  }
  onChangePage(event: PageEvent) {
    console.log(event);
  }

}
