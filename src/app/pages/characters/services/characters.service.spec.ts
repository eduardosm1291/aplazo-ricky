import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  let httpTestingController: HttpTestingController;
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule ],
      providers: [CharactersService]
    });
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
