import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  @Input() dataSource!: any;
  displayedColumns: string[] = ['id', 'name', 'status', 'specie'];

  constructor() { }

  ngOnInit(): void {
  }

}
