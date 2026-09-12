"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Sermon } from "@/types";

export function SermonCard({ sermon, index = 0 }: { sermon: Sermon; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/sermons/${sermon.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white transition-shadow hover:shadow-xl"
      >
        <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-brown-700">
          <span className="absolute left-4 top-4 rounded-full bg-cream/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-cream/80">
            {sermon.series}
          </span>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur-sm transition-transform group-hover:scale-110">
            <Play size={22} fill="currentColor" className="ml-0.5" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brown-500">
            {sermon.scripture}
          </p>
          <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-navy-900">
            {sermon.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-900/60">
            {sermon.summary}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-navy-900/8 pt-4 text-xs font-medium text-navy-900/50">
            <span>{sermon.speaker}</span>
            <span>{sermon.duration}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
