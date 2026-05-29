import { MOVIES_DATA } from "@/lib/data";
import MovieCard from "./movie-card";

/**React fragment */
export function MoviesList(){
    return(
        <>
            <div className="text-muted-foreground text-sm"> 
                Showing 5 of 100 movies.
            </div>
            <div className="grid grid-cols-1 sm:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MOVIES_DATA.map((movie) => (
                    <MovieCard
                        key={`movie-${movie._id}`}
                        movie={{ ...movie, genres: [...movie.genres] }}
                    />
                ))}
            </div>
        </>
    );
}