import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
   url = environment.api;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCharacters() {
    return this.httpClient.get<any>(this.url + '/character');
  }
  getCharactersDetail(id: number) {
    return this.httpClient.get<any>(this.url + '/character/'+ id);
  }
}

