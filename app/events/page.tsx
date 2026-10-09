import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EventCard } from "@/components/EventCard";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "See what's happening next at The Prayer Temple.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="What's happening next."
        highlight={["next."]}
        description="From prayer vigils to conferences, here's how to get plugged in this month."
      />
      <section className="bg-mist pb-24 pt-16 md:pb-32">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {events.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
