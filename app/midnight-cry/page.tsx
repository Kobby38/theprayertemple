import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
        description="An intercessory prayer ministry marked by spiritual awakening and seeking God through prayer, led by Prophetess Abena Hackman."
      />

      <section className="bg-cream py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
          <SectionHeading
            eyebrow="Why we exist"
            title="A cry that watches through the night."
          />
          <ScrollReveal delay={0.15} className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-navy-900/70">
            <p>
              Midnight Cry reflects Prophetess Abena Hackman&rsquo;s strong
              emphasis on intercession, spiritual awakening, and seeking God
              through prayer. It is a call to watch and pray, contending for
              breakthrough in the hours others sleep through.
            </p>
            <p>
              Whether you are carrying a burden, standing in the gap for
              others, or simply hungry for a deeper prayer life, Midnight Cry
              is a place to seek God&rsquo;s presence together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-sand py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <p className="mx-auto flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-brown-500">
              <Clock size={14} /> {midnightCryMeeting.schedule}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Weekly Zoom Call
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-900/70">
              Join us every week for a set watch of intercession, worship, and
              seeking God&rsquo;s presence over Zoom.
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
