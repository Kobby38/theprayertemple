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
      <section className="relative overflow-hidden bg-navy-900 pb-24 pt-40 text-cream grain">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brown-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <ScrollReveal className="mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-cream/10">
              <Image
                src={founder.photo!}
                alt={founder.name}
                width={1280}
                height={1600}
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brown-300">
              Meet the founder
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {founder.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
              {founderProfile.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="General Overseer"
              title="The Prayer Temple and Midnight Cry"
              align="center"
              className="mx-auto"
            />
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-navy-900/70">
              {founderProfile.overseer}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Her ministry" title="A voice for this generation." />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {founderProfile.aspects.map((aspect, i) => {
              const Icon = aspectIcons[aspect.icon] ?? Zap;
              return (
                <ScrollReveal key={aspect.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-brown-300">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight text-navy-900">
                      {aspect.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
                      {aspect.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-28 text-cream grain">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-brown-500/20 blur-[110px]" />
        <div className="relative mx-auto max-w-4xl space-y-16 px-6 text-center lg:px-10">
          {founderProfile.quotes.map((quote) => (
            <ScrollReveal key={quote}>
              <Quote className="mx-auto text-brown-300" size={32} />
              <p className="mx-auto mt-6 max-w-2xl text-balance text-2xl font-semibold leading-relaxed sm:text-3xl">
                {quote}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Get involved"
              title="Connect with her vision."
              align="center"
              className="mx-auto"
            />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/entrepreneur-womens-movement" size="lg">
                Entrepreneur Women&rsquo;s Movement
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Contact us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
