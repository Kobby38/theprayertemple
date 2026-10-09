import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/Marquee";
import { Welcome } from "@/components/home/Welcome";
import { SundayService } from "@/components/home/SundayService";
import { RecentRecordings } from "@/components/home/RecentRecordings";
import { EntrepreneurWomenBanner } from "@/components/home/EntrepreneurWomenBanner";
import { EventsTeaser } from "@/components/home/EventsTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { vision } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <div>
        <Marquee
          items={[
            { text: "Our vision", tone: "muted" },
            { text: vision.pillars[0], tone: "solid" },
            { text: vision.pillars[1], tone: "outline" },
            { text: vision.pillars[2], tone: "gold" },
            { text: vision.pillars[3], tone: "solid" },
            { text: "A house of prayer for every nation", tone: "muted" },
          ]}
        />
      </div>

      <Welcome />
      <SundayService />
      <RecentRecordings />
      <EntrepreneurWomenBanner />
      <EventsTeaser />
      <Testimonials />
      <CTASection />
    </>
  );
}
