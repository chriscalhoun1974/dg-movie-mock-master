export interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: MovieRating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface MovieList {
  Response: string;
  Search: MovieSearch[];
}

export interface MovieRating {
  Source: string;
  Value: string;
}

export interface MovieSearch {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  detail: Movie;
}
