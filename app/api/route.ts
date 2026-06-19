import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello from the API!",success:true });
   // const response = await fetch('http://localhost:3000/api/v1/movies');
   // const movies = await response.json();
   // return NextResponse.json(movies);
}