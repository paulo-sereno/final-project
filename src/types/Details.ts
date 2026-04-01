export interface IDetails {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  genres: IGenre[];
  title?: string;
  release_date?: string;
  runtime?: number;
  name?: string;
  first_air_date?: string;
  episode_run_time?: number[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IVideo {
  key: string;
  site: string;
  type: string;
  name: string;
}

export interface ICast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface IUseFetchDetails {
  type: "movie" | "tv";
  id: string;
}
