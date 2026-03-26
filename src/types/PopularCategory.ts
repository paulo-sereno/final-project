interface IPopularBase {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IPopularMovie extends IPopularBase {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface IPopularTV extends IPopularBase {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}

export type IPopularCategory = IPopularMovie | IPopularTV;

// type guards
export default function isMovie(item: IPopularCategory): item is IPopularMovie {
  return "title" in item;
}

// export function isTV(item: IPopularCategory): item is IPopularTV {
//   return "name" in item;
// }
