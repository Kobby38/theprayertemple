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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/events/${event.slug}`}
        className="group flex items-center gap-6 rounded-2xl border border-navy-900/8 bg-white p-6 transition-shadow hover:shadow-xl"
      >
        <div className="flex w-20 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-navy-900 py-3 text-center text-cream">
          {event.dateLabel ? (
            <span className="text-sm font-extrabold leading-tight">{event.dateLabel}</span>
          ) : (
            <>
              <span className="text-2xl font-extrabold leading-none">
                {endD ? `${d.getDate()}–${endD.getDate()}` : d.getDate()}
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-brown-300">
                {d.toLocaleDateString("en-US", { month: "short" })}
              </span>
            </>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brown-500">
            {event.category}
          </span>
          <h3 className="mt-1 text-lg font-bold leading-snug tracking-tight text-navy-900">
            {event.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-navy-900/55">
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {event.location}
            </span>
          </div>
        </div>
        <ArrowUpRight
          size={22}
          className="flex-shrink-0 text-navy-900/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brown-500"
        />
      </Link>
    </motion.div>
  );
}

export { formatDate };
