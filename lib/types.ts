export interface MovieData {
    _id: string;
    title: string;
    plot: string;
    poster: string;
    genres: string[];
    year: number;
    imdb: {
        rating: number;
    };
    runtime: number;
    type: string;
    directors: string;
}