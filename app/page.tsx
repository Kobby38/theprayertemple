import { Hero } from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";
import { SundayService } from "@/components/home/SundayService";
import { RecentRecordings } from "@/components/home/RecentRecordings";
import { EntrepreneurWomenBanner } from "@/components/home/EntrepreneurWomenBanner";
import { EventsTeaser } from "@/components/home/EventsTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
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
