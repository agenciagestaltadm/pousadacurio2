"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export function ImageWithSkeleton({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  containerClassName = "",
  priority = false,
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B]/10 to-[#123A73]/10 animate-pulse"
        style={{
          backgroundSize: "200% 200%",
          animation: isLoaded ? "none" : "shimmer 2s infinite",
        }}
      />
      
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`transition-all duration-500 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
