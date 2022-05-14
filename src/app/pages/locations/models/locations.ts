export interface Locationss {
  info: InfoLocations
  results: LocationssDetail[]
}
export interface InfoLocations {
  count: number,
  pages: number,
  next: string,
  prev: string
}
export interface LocationssDetail {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin?:   Location;
  location?: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}
export interface Location {
  name: string;
  url:  string;
}
