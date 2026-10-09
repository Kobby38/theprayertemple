import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitText } from "@/components/ui/SplitText";
import { JoinZoomButton } from "@/components/JoinZoomButton";
import { midnightCryMeeting } from "@/lib/data";

export const metadata: Metadata = {
  title: "Midnight Cry",
  description:
    "Midnight Cry is an intercessory prayer ministry marked by spiritual awakening and seeking God through prayer, led by Prophetess Abena Hackman.",
};

export default function MidnightCryPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministry spotlight"
        title="Midnight Cry"
        highlight={["Cry"]}
        description="An intercessory prayer ministry marked by spiritual awakening and seeking God through prayer, led by Prophetess Abena Hackman."
      />

      <section className="section bg-mist">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Why we exist"
              title="A cry that watches through the night."
              highlight={["night."]}
            />
          </div>
          <ScrollReveal
            delay={0.15}
            className="flex flex-col justify-center gap-6 text-body-lg text-ink-muted lg:col-span-5 lg:col-start-8"
          >
            <p>
              Midnight Cry reflects Prophetess Abena Hackman&rsquo;s strong emphasis on
              intercession, spiritual awakening, and seeking God through prayer. It is a call to
              watch and pray, contending for breakthrough in the hours others sleep through.
            </p>
            <p>
              Whether you are carrying a burden, standing in the gap for others, or simply hungry
              for a deeper prayer life, Midnight Cry is a place to seek God&rsquo;s presence
              together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-green-gradient text-white grain">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="wrap relative text-center">
          <p className="eyebrow justify-center !text-gold-light">
            <Clock size={14} /> {midnightCryMeeting.schedule}
          </p>
          <h2 className="mt-6 text-h1">
            <SplitText text="Weekly Zoom Call" highlight={["Zoom"]} />
          </h2>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-body-lg text-white/70">
              Join us every week for a set watch of intercession, worship, and seeking
              God&rsquo;s presence over Zoom.
            </p>
            <div className="mt-10 flex justify-center">
              <JoinZoomButton
                buttonLabel="Join Midnight Cry on Zoom"
                modalTitle="Join Midnight Cry"
                schedule={midnightCryMeeting.schedule}
                zoomLink={midnightCryMeeting.zoomLink}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
