import Link from "next/dist/client/link";
import { Logo } from "./logo";

// <footer> sematics are define to be used at the end of the page, but in this case we are using it as a placeholder for the footer content, so we can use it anywhere in the page.
export default function Footer(){
    return(
        <footer className="border-primary/20 bg-primary/5 border-t py-6 md:py-0">
            <div className="container mx-auto max-w-350 flex flex-col item-center justify-center gap-4 md:h-24 md-flex-row">
                <div className="flex items-center gap-2">
                    <Logo className="size-6"/>
                    <p className="capitalize text-muted-foreground text-center text-sm leading-loose md:text-left">
                        © {new Date().getFullYear()} CineScope LLC. All rights reserved.
                    </p> 
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm underline-colors transition-colors hover:underline">
                    Terms
                    </Link>
                    <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm underline-colors transition-colors hover:underline">
                    Privacy
                    </Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm underline-colors transition-colors hover:underline">
                    Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}