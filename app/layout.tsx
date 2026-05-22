import type { Metadata } from "next";
import { Geist, Geist_Mono,Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable:"--font-inter",
  subsets:["latin"]
});

export const metadata: Metadata = {
  title: { 
    default:"CineScope Movie App",
    template:"%s - CineScope Movie App"
  },
  description: "CineScope movie Libary is a web site that allows users to explore and discover movies from around the world. With a vast collection of films, users can browse through different genres, read reviews, and find recommendations based on their preferences. Whether you're a cinephile looking for hidden gems or just want to find your next movie night pick, CineScope has something for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable,inter.variable,inter.className)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
