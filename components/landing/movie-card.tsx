"use client";

import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card"

import Image from "next/image";
import { useState } from "react";
import type { MovieData } from "@/lib/types";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { set } from "better-auth";

interface MovieCardProps {
    movie: MovieData;
}

export default function MovieCard({movie}: MovieCardProps){
    const [posterUrl, setPosterUrl] = useState(movie.poster || "/placeholder.svg");

    return (
    <Card className="border-primary/20 hover:border-primary/50 transition--colors">
            <div className="aspect-2/3 w-full overflow-hidden">
                <Image src={posterUrl} alt={`${movie.title} poster`} width={300} height={450} 
                className="w-full h-full object-cover transition-transform hover:scale-105" 
                onError={()=>setPosterUrl("/placeholder.svg") 
                }
                />
            </div>
            <CardContent className="p-4">
                <h3 className="line-clamp-1 font-semibold text-base">{movie.title}</h3>

                <p className="text-muted-foreground text-sm">
                    {movie.year}+{movie.runtime} min
                </p>

                <div className="mt-2 flex flex-wrap gap-1">
                    {movie.genres.slice(0, 2).map((genre,index) => 
                        <Badge key={`genre-${genre}-${index}`} variant="outline" className="border-primary/30 bg-primary/5 text-xs rounded-sm">
                            {genre}
                        </Badge>
                    )}

                    {movie.genres.length > 2 && (
                        <Badge variant="outline" className="border-primary/30 text-xs rounded-sm">
                            +{movie.genres.length - 2} more
                        </Badge>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex justify-between p-4 pt-0 border-t-0 bg-transparent">
                <div className="flex items-center">
                    <span className="text-primary text-sm font-medium">
                        ⭐ {movie.imdb.rating || 0}/10
                    </span>
                </div>
                <Button variant="ghost" className="hover:text-primary rounded-sm cursor-pointer">
                    Details
                </Button>
            </CardFooter>
    </Card>);
}