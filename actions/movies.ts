"use server"

import { db } from "@/db";
import type { MoviesActionResponse } from "@/actions/types";
import { success } from "better-auth";

// Server-side function / Server action to fetch movies from the API
export async function getMovies() {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/v1/movies?limit=24`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { movies }: MoviesActionResponse = await response.json();

    return movies;
  } catch (error) {
    console.log("Error fetching movies:", error);
    return [];
  }
}

export async function searchMovies(query: string) {
  try {
    const movies=await db.collection("movies").find({ title: { $regex: query, $options: "i" } }).limit(50).toArray();
    if(movies && movies.length > 0){
      return {
        success: true,
        message:`Found ${movies.length} movies for query:"${query}"`,
        data: movies
      };
    }
    else{
      return {
        success: false,
        message: `No movies found for query:"${query}"`,
        data: []
      };
    }
  }catch (error) {
    console.log("Error searching movies:", error);
    return [];
  }
}
