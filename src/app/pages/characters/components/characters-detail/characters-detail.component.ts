import { select, Store } from '@ngrx/store';
import { Component, Inject, OnInit } from '@angular/core';
import { CharactersDetail } from '../../models/characters';
import { getDetail } from '../../store/selectors/characters.selectos';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CharactersDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CharactersDetail,
  ) { }

  ngOnInit(): void {

  }

}
