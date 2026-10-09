import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RecordingCard } from "@/components/RecordingCard";
import { getRecentRecordings } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Recordings",
  description: "Watch recent messages and recordings from The Prayer Temple.",
};

export default async function RecordingsPage() {
  const recordings = await getRecentRecordings(12);

  return (
    <>
      <PageHero
        eyebrow="Recording archive"
        title="Recent recordings."
        highlight={["recordings."]}
        description="Catch up on recent messages and gatherings from The Prayer Temple."
      />
      <section className="bg-champagne pb-24 pt-16 md:pb-32">
        <div className="wrap">
          {recordings.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {recordings.map((r, i) => (
                <RecordingCard key={r.videoId} recording={r} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-ink-muted">
              No recordings available right now. Check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
