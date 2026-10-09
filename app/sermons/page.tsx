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
        description="Catch up on recent messages and gatherings from The Prayer Temple."
      />
      <section className="bg-cream pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {recordings.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recordings.map((r, i) => (
                <RecordingCard key={r.videoId} recording={r} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-navy-900/60">
              No recordings available right now. Check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
