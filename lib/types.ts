export interface MovieData {
    _id: string;
    title: string;
    plot: string;
    poster: string;
    genres: readonly string[];
    year: number;
    imdb: {
        rating: number;
    };
    runtime: number;
    type: string;
    directors: readonly string[];
}
