import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET(reqeset:Request) {
    try {
        const {searchParams} = new URL(reqeset.url);
        const limit = searchParams.get('limit') || "50";

        const movies = await db.collection('movies').find().limit(parseInt(limit)).sort({released:-1}).toArray().catch((error)=>{
        console.log('Error fetching movies from database:', error);    
        throw new Error('Failed to fetch movies from database');
        });

        return NextResponse.json({ message: "Movies retrieved successfully",success:true, movies });
    } catch (error) {
        console.log('Error fetching movies from database:', (error as Error).message);
        return NextResponse.json({ message: 'Failed to fetch movies', success: false }, { status: 500 });
    }
    return NextResponse.json(
        { message: "Fail to retrieve movies",success:false, movies:[] },
        {status:500 }
    );
}