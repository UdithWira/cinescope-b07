"use client"

import Image from "next/image";
import { useState, useCallback } from "react";


interface MovieThumbnailProps {
  title: string;
  poster: string;
}   

//Smart component that handles image loading and error handling for movie thumbnails
export function MovieThumbnail({title,poster }: MovieThumbnailProps) {
    const [posterUrl, setPosterUrl] = useState(poster||"/placeholder.svg");

const handleImageError = useCallback(() => {
    setPosterUrl("/placeholder.svg");
  }, []);

    return <Image src={posterUrl} alt={title} width={28} height={40} className="h-10 rounded object-cover" onError={handleImageError} />;
}