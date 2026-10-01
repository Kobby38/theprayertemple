import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RecordingCard } from "@/components/RecordingCard";
import { siteConfig } from "@/lib/data";
import { getRecentRecordings } from "@/lib/youtube";

export async function RecentRecordings() {
  const recordings = await getRecentRecordings(3);

  if (recordings.length === 0) return null;

  return (
    <section className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Catch up" title="Recent recordings." />
          <Link
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-900"
          >
            All videos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recordings.map((r, i) => (
            <RecordingCard key={r.videoId} recording={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
