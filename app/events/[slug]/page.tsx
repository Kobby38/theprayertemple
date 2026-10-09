import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
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
    <section className="bg-cream pb-28 pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-900/60 transition-colors hover:text-navy-900"
        >
          <ArrowLeft size={16} /> All events
        </Link>

        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-brown-500">
          {event.category}
        </p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
          {event.title}
        </h1>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-navy-900/10 bg-white p-6 text-sm font-medium text-navy-900/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          <span className="flex items-center gap-2">
            <Calendar size={16} /> {eventDate}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} /> {event.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> {event.location}
          </span>
        </div>

        <p className="mt-10 text-lg leading-relaxed text-navy-900/70">
          {event.details}
        </p>

        <div className="mt-10">
          <Button href="/contact">Get in touch to RSVP</Button>
        </div>
      </div>
    </section>
  );
}
