import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EpisodeDetail, Episodes } from '../models/episodes';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  url = environment.api;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllEpisodes() {
    return this.httpClient.get<Episodes>(this.url + '/episode');
  }
  getEpisodeDetail(id: number) {
    return this.httpClient.get<EpisodeDetail>(this.url + '/episode/'+ id);
  }
  filterEpisodes(name: string) {
    let params: HttpParams;
    params = new HttpParams();
    params = params.append('name', name);
    return this.httpClient.get(this.url + '/episode/', {params});
  }
}
