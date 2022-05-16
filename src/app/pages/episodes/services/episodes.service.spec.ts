import { TestBed } from '@angular/core/testing';

import { EpisodesService } from './episodes.service';
import {HttpClientTestingModule, HttpTestingController}from "@angular/common/http/testing";
import { Episodes } from '../models/episodes';
import { HttpClientModule } from '@angular/common/http';
describe('EpisodesService', () => {

  let httpTestingController: HttpTestingController;
  let service: EpisodesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EpisodesService,
      ]
    });
    service = TestBed.inject(EpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
