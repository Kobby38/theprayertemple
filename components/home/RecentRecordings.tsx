import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { RecordingCard } from "@/components/RecordingCard";
import { getRecentRecordings } from "@/lib/youtube";

export async function RecentRecordings() {
  const recordings = await getRecentRecordings(3);

  if (recordings.length === 0) return null;

  return (
    <section className="section relative bg-champagne">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Catch up"
            title="Recent recordings."
            highlight={["recordings."]}
          />
          <ScrollReveal>
            <Button href="/sermons" variant="secondary" arrow>
              All recordings
            </Button>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {recordings.map((r, i) => (
            <RecordingCard key={r.videoId} recording={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
