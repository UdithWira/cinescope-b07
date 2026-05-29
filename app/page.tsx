import FeaturedMovies from "@/components/landing/featured-movies";
import HeroBanner from "@/components/landing/hero-banner";
import Footer from "@/components/shared/footer";
import MainNav from "@/components/shared/main-nav";

export default function Homepage(){
    return(
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1">
                <HeroBanner />
                <FeaturedMovies />
            </main>
            <Footer />
        </div>
    );
}