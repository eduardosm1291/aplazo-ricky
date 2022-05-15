export interface Episodes {
  info: InfoEpisodes
  results: EpisodeDetail[]
}
export interface InfoEpisodes {
  count: number,
  pages: number,
  next: string,
  prev: string
}
export interface EpisodeDetail {
  id:       number;
  name:     string;
  air_date:  string;
  episode:     string;
  characters:  string[];
  url:      string;
  created:  Date;
}
