export interface MoviesActionResponse {
    movies: Movie[];
    message:string;
    success:boolean;
}

export interface Movie {
    _id: string;
    title: string;
    plot: string;
    poster:string;
    year: number;
    released: string;
    runtime: number;
    imdb:{rating:number};
    genres: string[];
    directors: string[];
    type: string;
}