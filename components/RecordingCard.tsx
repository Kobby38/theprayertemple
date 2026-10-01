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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={`https://www.youtube.com/watch?v=${recording.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-video overflow-hidden bg-navy-900">
          {recording.thumbnail && (
            <Image
              src={recording.thumbnail}
              alt={recording.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-navy-900/20 transition-colors group-hover:bg-navy-900/30">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur-sm transition-transform group-hover:scale-110">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold leading-snug tracking-tight text-navy-900">
            {recording.title}
          </h3>
          {publishedLabel && (
            <p className="mt-3 text-xs font-medium uppercase tracking-widest text-navy-900/50">
              {publishedLabel}
            </p>
          )}
        </div>
      </a>
    </motion.div>
  );
}
