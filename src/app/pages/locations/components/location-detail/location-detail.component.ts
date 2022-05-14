import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationssDetail } from '../../models/locations';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LocationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LocationssDetail,
  ) { }

  ngOnInit(): void {
  }

}
