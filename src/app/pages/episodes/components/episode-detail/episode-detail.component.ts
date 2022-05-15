import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EpisodeDetail } from '../../models/episodes';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EpisodeDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EpisodeDetail,
  ) { }

  ngOnInit(): void {
  }

}
