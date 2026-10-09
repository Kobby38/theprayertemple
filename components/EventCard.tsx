"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import type { ChurchEvent } from "@/types";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function EventCard({ event, index = 0 }: { event: ChurchEvent; index?: number }) {
  const d = new Date(`${event.date}T00:00:00`);
  const endD = event.endDate ? new Date(`${event.endDate}T00:00:00`) : null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/events/${event.slug}`}
        className="group flex h-full items-center gap-6 rounded-3xl bg-white p-6 ring-1 ring-gold/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(14,59,42,0.35)] hover:ring-gold/60"
      >
        <div className="flex w-24 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-forest py-4 text-center text-white">
          {event.dateLabel ? (
            <span className="text-sm font-extrabold leading-tight">{event.dateLabel}</span>
          ) : (
            <>
              <span className="text-2xl font-extrabold leading-none">
                {endD ? `${d.getDate()}–${endD.getDate()}` : d.getDate()}
              </span>
              <span className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-gold-light">
                {d.toLocaleDateString("en-US", { month: "short" })}
              </span>
            </>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-eyebrow uppercase text-gold-deep">{event.category}</span>
          <h3 className="mt-2 text-h4">{event.title}</h3>
          <div className="mt-3 flex flex-col gap-1.5 text-caption text-ink-muted">
            {event.time && (
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="flex-shrink-0 text-gold-deep" /> {event.time}
              </span>
            )}
            <span className="flex items-start gap-1.5">
              <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold-deep" /> {event.location}
            </span>
          </div>
        </div>
        <ArrowUpRight
          size={22}
          className="flex-shrink-0 text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-deep"
        />
      </Link>
    </motion.div>
  );
}

export { formatDate };
