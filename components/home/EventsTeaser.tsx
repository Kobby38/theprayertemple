import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { events } from "@/lib/data";

export function EventsTeaser() {
  const upcoming = events.slice(0, 3);
  return (
    <section className="relative bg-sand py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="What's happening" title="Upcoming events." />
          <Link
            href="/events"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-900"
          >
            Full calendar
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {upcoming.map((e, i) => (
            <EventCard key={e.slug} event={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
