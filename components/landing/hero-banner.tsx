import {Button} from '@/components/ui/button';
import {PlayIcon} from "lucide-react";

export default function HeroBanner(){
    return(
        <section id="overview" className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Dark Overlay for darkening the background image */}
                <div className="bg-linear-to-r absolute inset-0 z-10 from-black/70 via-black/50 to-black/70 dark:from-black/80 dark:via-black/60 dark:to-black/60"></div>
                {/* Background image with overlay */}
                <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-60 dark:opacity-40 bg-amber-300"></div>
            </div>
            {/* Hero content */}
            <div className="container mx-auto relative z-20 px-4 py-32 md:py-40 lg:py-52">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="max-w-3xl space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
                            Discover Amazing Movies
                        </h1>
                        <p className="mx=auto max-w-175 text-lg text-white/80 drop-shadow-sm md:text-xl">
                            Explore our collection of the best movies arround the world.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="px-6 has-[>svg]:px-4 hover:bg-primary/90 gap-2 rounted-md ">
                            <PlayIcon className="mr-2 h-4 w-4" />
                            Browse Movies
                        </Button>
                        <Button size="lg" variant="outline" className="px-6 has-[>svg]:px-4 bg-primary/10 backdrop-blur-xs border-primary/30 hover:border-primary/30 text-white hover:text-white">Latest Releases</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}