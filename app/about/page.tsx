import type { Metadata } from "next";
import Image from "next/image";
import { Flame, GraduationCap, Landmark, Rocket, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitText } from "@/components/ui/SplitText";
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
        highlight={["prayer."]}
        description={
          <>
            {siteConfig.name} was founded in {siteConfig.founded} with a simple conviction: a
            church that prays will always outlast a church that only performs.
          </>
        }
      />

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Core identity"
            title="The Prayer Temple is called to be:"
            highlight={["be:"]}
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreIdentity.map((item, i) => {
              const Icon = identityIcons[item.icon] ?? Landmark;
              return (
                <ScrollReveal key={item.label} delay={i * 0.08}>
                  <div className="h-full rounded-3xl bg-ivory p-8 ring-1 ring-gold/25">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-gold-light">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-8 text-h4">{item.label}</h3>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our vision"
            title="A divine mandate, not merely a church expression."
            highlight={["mandate,"]}
          />
          <ol className="mt-16 border-t border-gold/30">
            {vision.pillars.map((pillar, i) => (
              <ScrollReveal key={pillar} delay={i * 0.06} y={24}>
                <li className="flex items-baseline gap-6 border-b border-gold/30 py-8 md:gap-12">
                  <span className="text-eyebrow uppercase text-gold-deep">0{i + 1}</span>
                  <span className="text-h2">{pillar}</span>
                </li>
              </ScrollReveal>
            ))}
          </ol>
          <ScrollReveal delay={0.2}>
            <p className="mt-12 max-w-3xl text-body-lg text-ink-muted">{vision.statement}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-forest text-white grain">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full bg-gold/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="wrap relative text-center">
          <p className="eyebrow justify-center !text-gold-light">Our mission</p>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-3xl text-balance text-h3 !font-semibold leading-snug text-white/90">
              {missionStatement}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we believe"
            title="Our core convictions."
            highlight={["convictions."]}
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {beliefs.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-ivory p-8 ring-1 ring-gold/25 md:p-10">
                  <span className="text-eyebrow uppercase text-gold-deep">0{i + 1}</span>
                  <h3 className="mt-4 text-h3">{b.title}</h3>
                  <p className="mt-4 text-ink-muted">{b.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-champagne">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl ring-1 ring-gold/40 lg:max-w-none">
              {founder.photo ? (
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-forest text-4xl font-bold text-white">
                  {founder.initials}
                </div>
              )}
            </div>
          </ScrollReveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow">Our pastor</p>
            <h2 className="mt-6 text-h2">
              <SplitText text={founder.name} highlight={["Hackman"]} />
            </h2>
            <ScrollReveal delay={0.15}>
              <p className="mt-3 text-eyebrow uppercase text-gold-deep">{founder.role}</p>
              <p className="mt-8 max-w-xl text-body-lg text-ink-muted">{founder.bio}</p>
              <div className="mt-10">
                <Button href="/founder" variant="dark" arrow>
                  Read her full story
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-night text-white grain">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="wrap relative text-center">
          <p className="eyebrow justify-center !text-gold-light">Final declaration</p>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-body-lg text-white/80">
              {declaration.intro}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              We are: {declaration.identity.join(" · ")}.
            </p>
          </ScrollReveal>
          <div className="mt-14">
            {declaration.rally.map((line, i) => (
              <p key={line} className="gold-text text-h1">
                <SplitText text={line} delay={i * 0.15} />
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
