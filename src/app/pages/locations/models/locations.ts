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
  dimension:  string;
  type:     string;
  residents:  string[];
  url:      string;
  created:  Date;
}
