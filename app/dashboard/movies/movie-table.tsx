import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MOVIES_DATA } from "@/lib/data"


export default function MovieTable() {
  return (
    <div className="rounded-md border">
    <Table>
      <TableCaption className="sr-only">Admin movies Table.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-muted-foreground">#</TableHead>
          <TableHead className="text-muted-foreground">Title</TableHead>
          <TableHead className="text-muted-foreground">Year</TableHead>
          <TableHead className="text-muted-foreground">Genre</TableHead>
          <TableHead className="text-muted-foreground">Rating</TableHead>
          <TableHead className="text-muted-foreground">Status</TableHead>
          <TableHead className="text-muted-foreground">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {MOVIES_DATA.map((movie) => (
          <TableRow key={movie._id}>
            <TableCell className="font-medium">{movie._id}</TableCell>
            <TableCell>{movie.title}</TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell>{movie.genres.at(0)}</TableCell>
            <TableCell>{movie.imdb.rating}</TableCell>
            <TableCell>Draft</TableCell>
            <TableCell>
            Test
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}
