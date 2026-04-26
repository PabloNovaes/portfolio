"use client";

import { Badge } from "@/components/ui/badge";
import { cleanString } from "@/lib/clear-string";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, ViewTransition } from "react";

function ProjectVideo({ src }: { src: string }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-48 bg-zinc-900">
      {/* Fallback de blur enquanto o vídeo não carrega */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-zinc-800 animate-pulse blur-xl" />
      )}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata" // Carrega apenas o básico inicialmente
        onLoadedData={() => setIsVideoLoaded(true)}
        className={cn(
          "w-full h-48 object-cover transition-opacity duration-500",
          isVideoLoaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "relative w-full h-48 overflow-hidden bg-zinc-900",
        isLoading && "animate-pulse",
      )}>
      <Image
        src={src.replace(".", "")}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
          "object-cover transition-all duration-700",
          isLoading
            ? "scale-110 blur-2xl opacity-0"
            : "scale-100 blur-0 opacity-100",
        )}
        onLoadingComplete={() => setIsLoading(false)}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
      />
    </div>
  );
}

export function ProjectCard({
  title,
  client,
  image,
  video,
  links,
  className,
}: Project) {
  return (
    <ViewTransition name={cleanString(title)} share="morph">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <Link
          id={cleanString(title)}
          href={`/${cleanString(title)}`}
          className={cn(
            "flex flex-col group h-full gap-5 overflow-hidden cursor-pointer transition-all duration-300",
            className,
          )}>
          <div className="relative shrink-0 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
            {video ? (
              <ProjectVideo src={video} />
            ) : image ? (
              <ProjectImage src={image} alt={title} />
            ) : (
              <div className="w-full h-48 bg-zinc-800" />
            )}

            {/* Links Overlay - Só renderiza se houver interação para poupar DOM */}
            {links && links.length > 0 && (
              <div className="absolute top-2 right-2 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                {links.map((link, idx) => (
                  <Link
                    href={link.href}
                    key={idx}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}>
                    <Badge className="bg-black/80 backdrop-blur-md text-white border-zinc-700">
                      {link.icon}
                      <span className="ml-1.5">{link.type}</span>
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-zinc-100">{title}</h3>
              <ArrowUpRight className="h-3 w-3 text-zinc-500 opacity-0 group-hover:opacity-100 transition-all" />
            </div>
            <p className="text-xs text-zinc-500">{client}</p>
          </div>
        </Link>
      </motion.div>
    </ViewTransition>
  );
}
