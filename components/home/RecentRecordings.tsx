import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SermonCard } from "@/components/SermonCard";
import { sermons } from "@/lib/data";

export function RecentRecordings() {
  const recent = sermons.slice(0, 3);
  return (
    <section className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Catch up" title="Recent recordings." />
          <Link
            href="/sermons"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-900"
          >
            All sermons
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((s, i) => (
            <SermonCard key={s.slug} sermon={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
