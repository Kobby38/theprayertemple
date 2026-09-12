"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SermonCard } from "@/components/SermonCard";
import { sermons } from "@/lib/data";

const series = ["All", ...Array.from(new Set(sermons.map((s) => s.series)))];

export function SermonsExplorer() {
  const [query, setQuery] = useState("");
  const [activeSeries, setActiveSeries] = useState("All");

  const filtered = useMemo(() => {
    return sermons.filter((s) => {
      const matchesSeries = activeSeries === "All" || s.series === activeSeries;
      const matchesQuery =
        query.trim().length === 0 ||
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.speaker.toLowerCase().includes(query.toLowerCase());
      return matchesSeries && matchesQuery;
    });
  }, [query, activeSeries]);

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/40"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sermons or speakers"
              className="w-full rounded-full border border-navy-900/15 bg-white py-3 pl-11 pr-4 text-sm text-navy-900 outline-none transition-colors focus:border-brown-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {series.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSeries(s)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSeries === s
                    ? "bg-navy-900 text-cream"
                    : "bg-white text-navy-900/60 hover:text-navy-900"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((sermon, i) => (
              <SermonCard key={sermon.slug} sermon={sermon} index={i} />
            ))}
          </div>
        ) : (
          <p className="mt-20 text-center text-navy-900/50">
            No sermons match your search just yet.
          </p>
        )}
      </div>
    </section>
  );
}
