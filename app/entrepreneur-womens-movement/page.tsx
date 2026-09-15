import type { Metadata } from "next";
import Image from "next/image";
import { Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JoinZoomButton } from "@/components/JoinZoomButton";
import { ewmMeeting } from "@/lib/data";

export const metadata: Metadata = {
  title: "Entrepreneur Women's Movement",
  description:
    "A faith-fueled community equipping women in business and ministry with mentorship, biblical financial wisdom, and practical tools to build kingdom enterprises.",
};

const charityPhotos = [
  {
    src: "/images/charity/charity-01.jpg",
    alt: "A father and mother with their baby at the community outreach event",
  },
  {
    src: "/images/charity/charity-02.jpg",
    alt: "Volunteers serving hot meals to the community",
  },
  {
    src: "/images/charity/charity-03.jpg",
    alt: "A mother holding her baby at the outreach event",
  },
  {
    src: "/images/charity/charity-04.jpg",
    alt: "Children and volunteers gathered together at the outreach event",
  },
  {
    src: "/images/charity/charity-05.jpg",
    alt: "A care package of household and food essentials for families",
  },
  {
    src: "/images/charity/charity-06.jpg",
    alt: "Care packages prepared for families in the community",
  },
];

export default function EntrepreneurWomensMovementPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 pb-24 pt-40 text-cream grain">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brown-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brown-300">
              Ministry spotlight
            </p>
            <h1 className="mt-4 text-balance text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-7xl">
              Entrepreneur Women&rsquo;s Movement
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
              Faith-fueled business. Purpose-driven leadership. A community
              for women building kingdom enterprises in business, ministry,
              and everywhere in between.
            </p>
            <p className="mt-8 border-l-2 border-brown-300 pl-4 text-sm font-medium italic leading-relaxed text-cream/60">
              &ldquo;A virtuous woman is a prayerful woman.&rdquo;
            </p>
          </div>
          <ScrollReveal delay={0.15} className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/ewm-group-photo.jpg"
                alt="Women of the Entrepreneur Women's Movement celebrating together"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
          <SectionHeading
            eyebrow="Why we exist"
            title="Your calling and your career were never meant to be separate."
          />
          <ScrollReveal delay={0.15} className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-navy-900/70">
            <p>
              The Entrepreneur Women&rsquo;s Movement exists to equip women
              in business and ministry with the mentorship, biblical
              financial wisdom, and practical tools to build sustainable,
              kingdom-minded enterprises.
            </p>
            <p>
              Whether you&rsquo;re launching your first idea, scaling an
              existing business, or discerning what God is calling you to
              build next, this is a community that will pray with you and
              walk with you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-sand py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <p className="mx-auto flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-brown-500">
              <Clock size={14} /> {ewmMeeting.schedule}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Weekly Zoom Call
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-900/70">
              Join women from across the movement every week for encouragement,
              teaching, and prayer over Zoom.
            </p>
            <div className="mt-10 flex justify-center">
              <JoinZoomButton
                buttonLabel="Join EWM on Zoom"
                modalTitle="Join EWM"
                schedule={ewmMeeting.schedule}
                zoomLink={ewmMeeting.zoomLink}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Faith in action"
            title="Charity in Pictures"
            align="center"
            className="mx-auto"
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-navy-900/70">
            A glimpse into our community outreach, where the movement puts
            love into action through shared meals, care packages, and time
            given to families and children.
          </p>
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {charityPhotos.map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 0.08} className="mb-4 break-inside-avoid">
                <div className="group relative overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={800}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-28 text-cream grain">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brown-500/20 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brown-300">
              Meets 2nd Saturday monthly · 10:00 AM
            </p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Come build with us.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
              No business experience required, just a willingness to grow.
              Reach out and we&rsquo;ll get you connected before the next
              gathering.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" size="lg">
                Join the movement
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
