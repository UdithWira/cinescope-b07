import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieData from "./movie-data";

export default function DashboardMoviesPage() {
  return (
    <div className="space-y-4 flex-1 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tide">Movies Management</h2>
            <p className="text-muted-foreground">
              Manage your movie collection and update details.
            </p>
          </div>
          <Button size="lg" className="rounded-md has-[>svg]:px-3">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Movie
          </Button>
          
        </div>
        <div className="h-9 w-full bg-teal-300 rounded-md"></div>
        {/* Movie list or management content goes here */}
        <MovieData />
    </div>
  );
}