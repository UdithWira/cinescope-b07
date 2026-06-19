//import { MOVIES_DATA } from "@/lib/data";
import { getMovies } from "@/actions/movies";
import MovieCard from "./movie-card";

/**React fragment */
export async function MoviesList(){
    const movies = await getMovies();

    if(!movies || movies.length === 0){
        return(
            <div className="text-muted-foreground text-sm">
                No movies found.
            </div>
        );
    }

    return(
        <>
            <div className="text-muted-foreground text-sm"> 
                Showing 5 of 100 movies.
            </div>
            <div className="grid grid-cols-1 sm:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <MovieCard
                        key={`movie-${movie._id}`}
                        movie={movie}
                    />
                ))}
            </div>
        </>
    );
}