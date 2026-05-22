import Footer from "@/components/shared/footer";
import MainNav from "@/components/shared/main-nav";

export default function Profile(){
    return(
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="min-h-screen text-black p-4">
                Main content here
            </main>
            <Footer />
        </div>
    );
}