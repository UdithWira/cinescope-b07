"use server"

// import { db } from "@/db";
import type { MoviesActionResponse } from "@/actions/types";

// Server-side function / Server action to fetch movies from the API
export async function getMovies() {
  try {
    const response = await fetch(
      `${process.env.API_BASSE_URL}/v1/movies?limit=24`,
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
