import {searchMovies} from "@/actions/movies";
import MovieTable from "./movie-table";
import { Movie } from "./types";

interface MovieDataProps {
    query: string;
}
// This is a parent component that fetches movie data and renders the MovieTable component
export default async function  MovieData({query = ""}: MovieDataProps) {

    const { data, success }= await searchMovies(query);
    if(!success){
        throw new Error("Failed to fetch movies data");
    }

    const refineMovies = data.map((movie) => ({
        id: movie._id.toString(),
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        rated: movie.rated,
        runtime: movie.runtime,
        genres: movie.genres,
        status: movie.status,
        poster:movie.poster,
        backdrop: movie.backdrop,
        directors: movie.directors,
        imdb: movie.imdb,            
    }));
    //console.log("Refined movies data:", refineMovies);
   
        return <MovieTable movies={refineMovies} />;



}