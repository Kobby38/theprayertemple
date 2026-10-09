"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Recording } from "@/types";

export function RecordingCard({ recording, index = 0 }: { recording: Recording; index?: number }) {
  const publishedLabel = recording.publishedAt
    ? new Date(recording.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={`https://www.youtube.com/watch?v=${recording.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col"
      >
        <div className="relative aspect-video overflow-hidden rounded-3xl bg-forest ring-1 ring-gold/25">
          {recording.thumbnail && (
            <Image
              src={recording.thumbnail}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-forest/20 transition-colors group-hover:bg-forest/35">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-forest shadow-xl transition-transform duration-300 group-hover:scale-110">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </span>
          </div>
        </div>
        {publishedLabel && (
          <p className="mt-5 text-caption font-medium text-gold-deep">{publishedLabel}</p>
        )}
        <h3 className="mt-2 text-h4 transition-colors group-hover:text-gold-deep">
          {recording.title}
        </h3>
      </a>
    </motion.div>
  );
}
