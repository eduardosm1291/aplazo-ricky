import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Characters, CharactersDetail } from '../models/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
   url = environment.api;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCharacters() {
    return this.httpClient.get<Characters>(this.url + '/character');
  }
  getCharactersDetail(id: number) {
    return this.httpClient.get<CharactersDetail>(this.url + '/character/'+ id);
  }
  filterCharacter(name: string) {
    let params: HttpParams;
    params = new HttpParams();
    params = params.append('name', name);
    return this.httpClient.get(this.url + '/character/', {params});
  }
}

