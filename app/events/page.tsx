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
        description="From prayer vigils to conferences, here's how to get plugged in this month."
      />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="flex flex-col gap-5">
            {events.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
