"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";

import type { Movie } from "./types"
import { MovieThumbnail } from "./movie-thumbnail";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { MoreHorizontalIcon } from 'lucide-react';

interface MovieTableProps {
  movies: Movie[];
}

export default function MovieTable({movies}: MovieTableProps) {
const getStatusBadgeClass = (status:string) =>{
  switch(status.toLowerCase())
  {
    case "published":
      return "bg-green-100 text-green-800 border-green-200";
    case "draft":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "archived":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

  return (
    <div className="rounded-md border">
    <Table>
      <TableCaption className="sr-only">Admin movies Table.</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-accent/50 hover-cursor-pointer">
          <TableHead className="w-20 text-muted-foreground">#</TableHead>
          <TableHead className="text-muted-foreground">Title</TableHead>
          <TableHead className="text-muted-foreground">Year</TableHead>
          <TableHead className="text-muted-foreground">Genre</TableHead>
          <TableHead className="text-muted-foreground">Rating</TableHead>
          <TableHead className="text-muted-foreground">Status</TableHead>
          <TableHead className="text-muted-foreground">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {movies.map((movie,idx) => (
          <TableRow key={`movie-${movie.id}`} className="hover:bg-accent/50 hover-cursor-pointer">
            <TableCell className="font-medium">{idx+1}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {/* Movie Thumbnail */}
                <MovieThumbnail title={movie.title} poster={movie.poster} />
                <span className="font-medium max-w-60 text-wrap line-clamp-2">
                  {movie.title}
                </span>
              </div>
            </TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
              {movie.genres.map((genre, idx) => (
              <Badge key={`${genre}-${idx}`} variant="outline" className="text-xs rounded-md">
                {genre}
              </Badge>
            ))}
            </div>
            </TableCell>
            <TableCell>{Number.isFinite(movie.imdb.rating) ? movie.imdb.rating.toFixed(1) : "N/A"}

            </TableCell>
            <TableCell>
              <Badge variant="outline" className={cn("rounded capitalize text-xs", getStatusBadgeClass(movie.status ?? "Published"))}>
                {movie.status ?? "Published"}
              </Badge>
            </TableCell>
            <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className='sr-only'>Open menu</span>
                  <MoreHorizontalIcon className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='rounded-md ring-0 border-border'>
                <DropdownMenuLabel className='text-black text-sm font-medium'>Movie Actions</DropdownMenuLabel>
                <DropdownMenuItem className='cursor-pointer'>View Details</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer' onClick={()=>{}}>Edit</DropdownMenuItem>
                 <DropdownMenuSeparator />
                <DropdownMenuItem className='text-destructive cursor-pointer' onClick={()=>{}}>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}
