import type { Metadata } from "next";
import Image from "next/image";
import {
  Compass,
  Crown,
  Globe,
  Landmark,
  Quote,
  Sprout,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitText } from "@/components/ui/SplitText";
import { Button } from "@/components/ui/Button";
import { founderProfile, leaders } from "@/lib/data";

export const metadata: Metadata = {
  title: "Prophetess Abena Hackman",
  description:
    "Meet Prophetess Abena Hackman, founder and General Overseer of The Prayer Temple and Midnight Cry.",
};

const aspectIcons: Record<string, LucideIcon> = {
  zap: Zap,
  landmark: Landmark,
  globe: Globe,
  crown: Crown,
  sprout: Sprout,
  compass: Compass,
};

export default function FounderPage() {
  const founder = leaders[0];

  return (
    <>
      <section className="relative overflow-hidden bg-green-gradient pb-20 pt-40 text-white grain md:pb-28 md:pt-48">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gold/35 blur-[110px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-lime/25 blur-[110px]"
          aria-hidden="true"
        />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl ring-1 ring-gold/40 lg:max-w-none">
              {founder.photo && (
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                />
              )}
            </div>
          </ScrollReveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow !text-gold-light">Meet the founder</p>
            <h1 className="mt-6 text-h1">
              <SplitText text={founder.name} highlight={["Hackman"]} light immediate delay={0.1} />
            </h1>
            <ScrollReveal delay={0.4}>
              <p className="mt-8 max-w-2xl text-body-lg text-white/80">{founderProfile.intro}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section bg-champagne">
        <div className="wrap text-center">
          <SectionHeading
            eyebrow="General Overseer"
            title="The Prayer Temple and Midnight Cry"
            highlight={["Midnight", "Cry"]}
            align="center"
          />
          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-3xl text-body-lg text-ink-muted">
              {founderProfile.overseer}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Her ministry"
            title="A voice for this generation."
            highlight={["generation."]}
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {founderProfile.aspects.map((aspect, i) => {
              const Icon = aspectIcons[aspect.icon] ?? Zap;
              return (
                <ScrollReveal key={aspect.title} delay={(i % 3) * 0.08}>
                  <div className="h-full rounded-3xl bg-mist p-8 ring-1 ring-leaf/30">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-gradient text-gold-light">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-8 text-h4">{aspect.title}</h3>
                    <p className="mt-3 text-ink-muted">{aspect.body}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-green-gradient text-white grain">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[44rem] -translate-x-1/2 rounded-full bg-gold/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="wrap relative max-w-4xl space-y-20 text-center">
          {founderProfile.quotes.map((quote) => (
            <ScrollReveal key={quote}>
              <Quote className="mx-auto text-gold-light" size={36} />
              <p className="mt-8 text-balance text-h2 !font-semibold">{quote}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap text-center">
          <SectionHeading
            eyebrow="Get involved"
            title="Connect with her vision."
            highlight={["vision."]}
            align="center"
          />
          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Button href="/entrepreneur-womens-movement" arrow>
                Entrepreneur Women&rsquo;s Movement
              </Button>
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
