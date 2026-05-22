import Link from "next/link";

export default function Header(){
    return(
        <header className="sticky w-full top-0 z-1 bg-background boder-b border-primary/20">
            <div className="flex itmes-center container max-w350 mx-auto px-8 h-8">
                <Link href="/">CineScope</Link>
            </div>
        </header>
    );
}