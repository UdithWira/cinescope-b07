import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { ModeToggle } from "./mode-toggle";

//JavaScript oject array for nav links
const NAV_LINKS = [
    { href: "/movies", label: "Movies" },
    { href: "/genres", label: "Genres" },
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Admin" }
];

export default function MainNav(){
    return(
        <header className="sticky w-full top-0 z-1 bg-background boder-b border-primary/20">
            <div className="flex itmes-center container max-w-350 mx-auto px-8 h-16">
                <Link href="/" className="flex item-center gap-2">
                <Logo /> 
                <span className="text-primary text-xl font-bold">CineScope</span>
                </Link>
                <nav className="ml-auto flex items-center gap-4">
                {NAV_LINKS.map((link) => (
                    <Link key={link.label} href={link.href} className="hover:text-primary text-sm font-medium transition-colors">
                        {link.label}
                    </Link>
                ))}
                <ModeToggle />
            </nav>

            </div>
        </header>
    );
}