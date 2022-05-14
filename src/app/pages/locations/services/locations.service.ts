import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Locationss, LocationssDetail } from '../models/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  url = environment.api;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllLocationss() {
    return this.httpClient.get<Locationss>(this.url + '/Locations');
  }
  getLocationssDetail(id: number) {
    return this.httpClient.get<LocationssDetail>(this.url + '/Locations/'+ id);
  }
  filterLocations(name: string) {
    let params: HttpParams;
    params = new HttpParams();
    params = params.append('name', name);
    return this.httpClient.get(this.url + '/Locations/', {params});
  }
}
