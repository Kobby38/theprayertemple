import type { Metadata } from "next";
import Image from "next/image";
import { Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitText } from "@/components/ui/SplitText";
import { JoinZoomButton } from "@/components/JoinZoomButton";
import { ewmMeeting } from "@/lib/data";

export const metadata: Metadata = {
  title: "Entrepreneur Women's Movement",
  description:
    "A faith-fueled community equipping women in business and ministry with mentorship, biblical financial wisdom, and practical tools to build kingdom enterprises.",
};

const charityPhotos = [
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
      <section className="relative overflow-hidden bg-white pb-20 pt-40 md:pb-28 md:pt-48">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gold-light/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-leaf/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Ministry spotlight</p>
            <h1 className="mt-6 text-h1">
              <SplitText
                text="Entrepreneur Women's Movement"
                highlight={["Women's"]}
                immediate
                delay={0.1}
              />
            </h1>
            <ScrollReveal delay={0.4}>
              <p className="mt-8 max-w-xl text-body-lg text-ink-muted">
                Faith-fueled business. Purpose-driven leadership. A community for women building
                kingdom enterprises in business, ministry, and everywhere in between.
              </p>
              <p className="mt-8 border-l-2 border-gold pl-4 text-sm font-medium italic text-ink-muted">
                &ldquo;A virtuous woman is a prayerful woman.&rdquo;
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl ring-1 ring-gold/40 lg:max-w-none">
              <Image
                src="/images/ewm-group-photo.jpg"
                alt="Women of the Entrepreneur Women's Movement celebrating together"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Why we exist"
              title="Your calling and your career were never meant to be separate."
              highlight={["separate."]}
            />
          </div>
          <ScrollReveal
            delay={0.15}
            className="flex flex-col justify-center gap-6 text-body-lg text-ink-muted lg:col-span-5 lg:col-start-8"
          >
            <p>
              The Entrepreneur Women&rsquo;s Movement exists to equip women in business and
              ministry with the mentorship, biblical financial wisdom, and practical tools to build
              sustainable, kingdom-minded enterprises.
            </p>
            <p>
              Whether you&rsquo;re launching your first idea, scaling an existing business, or
              discerning what God is calling you to build next, this is a community that will pray
              with you and walk with you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-forest text-white grain">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="wrap relative text-center">
          <p className="eyebrow justify-center !text-gold-light">
            <Clock size={14} /> {ewmMeeting.schedule}
          </p>
          <h2 className="mt-6 text-h1">
            <SplitText text="Weekly Zoom Call" highlight={["Zoom"]} />
          </h2>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-body-lg text-white/70">
              Join women from across the movement every week for encouragement, teaching, and
              prayer over Zoom.
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

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Faith in action"
            title="Community Outreach"
            highlight={["Outreach"]}
            align="center"
            description="A glimpse into our community outreach, where the movement puts love into action through shared meals, care packages, and time given to families and children."
          />
          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {charityPhotos.map((photo, i) => (
              <ScrollReveal key={photo.src} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
                <div className="group relative overflow-hidden rounded-3xl ring-1 ring-gold/25">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={800}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
