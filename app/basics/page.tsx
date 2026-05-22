// import Image from "next/image";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function Profile(){
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="min-h-screen bg-amber-200 text-black p-4">
                Main content here
            </main>
            <Footer />
        </div>
    );
}