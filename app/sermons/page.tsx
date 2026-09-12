import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SermonsExplorer } from "@/components/sermons/SermonsExplorer";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Watch and search every message from The Prayer Temple.",
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sermon archive"
        title="Every message, in one place."
        description="Search past series, revisit a favorite word, or catch up on what you missed."
      />
      <SermonsExplorer />
    </>
  );
}
