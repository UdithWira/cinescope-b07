import HeroBanner from "@/components/landing/hero-banner";
import Footer from "@/components/shared/footer";
import MainNav from "@/components/shared/main-nav";

export default function Homeoage(){
    return(
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1">
                <HeroBanner />
            </main>
            <Footer />
        </div>
    );
}