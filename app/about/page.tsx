import type { Metadata } from "next";
import Image from "next/image";
import { Flame, GraduationCap, Landmark, Rocket, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { coreIdentity, declaration, leaders, missionStatement, siteConfig, vision } from "@/lib/data";

const identityIcons: Record<string, LucideIcon> = {
  landmark: Landmark,
  "graduation-cap": GraduationCap,
  flame: Flame,
  rocket: Rocket,
};

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, mission, and leadership of The Prayer Temple, founded by Prophetess Abena Hackman.",
};

const beliefs = [
  {
    title: "The Word of God",
    body: "We believe the Bible is the inspired, authoritative Word of God and the foundation for all we teach and practice.",
  },
  {
    title: "The Power of Prayer",
    body: "Prayer is not a program. It is the lifeblood of our church, and we contend for breakthrough individually and corporately.",
  },
  {
    title: "The Holy Spirit",
    body: "We welcome the active, present ministry of the Holy Spirit in worship, teaching, and everyday life.",
  },
  {
    title: "Christ-Centered Community",
    body: "We grow best together. Every ministry exists to draw people deeper into relationship with God and one another.",
  },
];

export default function AboutPage() {
  const founder = leaders[0];
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Built on the Word. Sustained by prayer."
        description={
          <>
            {siteConfig.name} was founded in {siteConfig.founded} with a
            simple conviction: a church that prays will always outlast a
            church that only performs.
          </>
        }
      />

      <section className="bg-cream py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Core identity" title="The Prayer Temple is called to be:" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreIdentity.map((item, i) => {
              const Icon = identityIcons[item.icon] ?? Landmark;
              return (
                <ScrollReveal key={item.label} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-brown-300">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight text-navy-900">
                      {item.label}
                    </h3>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Our vision" title="A divine mandate, not merely a church expression." />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vision.pillars.map((pillar, i) => (
              <ScrollReveal key={pillar} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-brown-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-navy-900">
                    {pillar}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-14 max-w-3xl text-center text-lg leading-relaxed text-navy-900/70">
              {vision.statement}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-28 text-cream grain">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brown-500/20 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brown-300">
              Our mission
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
              {missionStatement}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="What we believe" title="Our core convictions." />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {beliefs.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-brown-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-navy-900">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
                    {b.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-28 text-cream grain">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brown-500/20 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Leadership" title="Our Pastor" light />
          <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <ScrollReveal className="mx-auto w-full max-w-xs lg:max-w-sm">
              <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-cream/10">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={1280}
                    height={1600}
                    sizes="(min-width: 1024px) 30vw, 80vw"
                    className="h-auto w-full"
                  />
                ) : (
                  <div className="flex aspect-[3/4] items-center justify-center bg-cream/5 text-4xl font-bold">
                    {founder.initials}
                  </div>
                )}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {founder.name}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-brown-300">
                {founder.role}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
                {founder.bio}
              </p>
              <div className="mt-8">
                <Button href="/founder" variant="ghost" className="border-cream/25 text-cream hover:border-cream">
                  Read her full story
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brown-500 py-28 text-cream">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy-900/60">
              Final declaration
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
              {declaration.intro}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-cream/75">
              We are: {declaration.identity.join(" · ")}.
            </p>
            <div className="mt-10 space-y-1">
              {declaration.rally.map((line) => (
                <p
                  key={line}
                  className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                >
                  {line}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
