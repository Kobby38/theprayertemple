import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { events } from "@/lib/data";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  props: PageProps<"/events/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return { title: event.title, description: event.summary };
}

export default async function EventDetailPage(
  props: PageProps<"/events/[slug]">
) {
  const { slug } = await props.params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const start = new Date(`${event.date}T00:00:00`);
  const end = event.endDate ? new Date(`${event.endDate}T00:00:00`) : null;
  const eventDate =
    event.dateLabel ??
    (end
      ? `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })}–${end.toLocaleDateString("en-US", { day: "numeric", year: "numeric" })}`
      : start.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }));

  return (
    <>
      <PageHero eyebrow={event.category} title={event.title} />

      <section className="bg-white pb-24 pt-4 md:pb-32">
        <div className="wrap max-w-4xl">
          <ScrollReveal>
            <div className="grid gap-6 rounded-3xl bg-ivory p-8 ring-1 ring-gold/30 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Calendar size={20} className="mt-0.5 flex-shrink-0 text-gold-deep" />
                <div>
                  <p className="text-caption text-ink-muted">Date</p>
                  <p className="mt-1 font-semibold">{eventDate}</p>
                </div>
              </div>
              {event.time && (
                <div className="flex items-start gap-3">
                  <Clock size={20} className="mt-0.5 flex-shrink-0 text-gold-deep" />
                  <div>
                    <p className="text-caption text-ink-muted">Time</p>
                    <p className="mt-1 font-semibold">{event.time}</p>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-gold-deep" />
                <div>
                  <p className="text-caption text-ink-muted">Where</p>
                  <p className="mt-1 font-semibold">{event.location}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-12 text-body-lg text-ink-muted">{event.details}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact" arrow>
                Get in touch to RSVP
              </Button>
              <Button href="/events" variant="secondary">
                All events
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
