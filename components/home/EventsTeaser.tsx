import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/EventCard";
import { events } from "@/lib/data";

export function EventsTeaser() {
  const upcoming = events.slice(0, 3);
  return (
    <section id="events" className="section relative scroll-mt-24 bg-mist">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What's happening"
            title="Upcoming events."
            highlight={["events."]}
          />
          <ScrollReveal>
            <Button href="/events" variant="secondary" arrow>
              Full calendar
            </Button>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {upcoming.map((e, i) => (
            <EventCard key={e.slug} event={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
