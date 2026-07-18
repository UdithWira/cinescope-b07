export interface Movie {
  id: string;
  title: string;
  year: number;
  plot: string;
  rated: string;
  runtime: string;
  genres: string[];
  status: string;
  poster: string;
  backdrop: string;
  directors: string[];
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
}