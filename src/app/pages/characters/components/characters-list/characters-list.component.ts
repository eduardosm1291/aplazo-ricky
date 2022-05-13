import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharactersDetail } from '../../models/characters';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  @Input()
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'status', 'specie'];
  @Output() characterDetail: EventEmitter<CharactersDetail> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  characterDeatail( item: CharactersDetail) {
    console.log(item);
    this.characterDetail.emit(item);
  }

}
