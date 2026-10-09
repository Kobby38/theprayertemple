import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/SplitText";
import { Button } from "@/components/ui/Button";
import { leaders, siteConfig } from "@/lib/data";

export function Welcome() {
  const pastor = leaders[0];
  return (
    <section id="welcome" className="section relative scroll-mt-20 bg-mist">
      <div className="wrap grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">Welcome home</p>
          <h2 className="mt-6 text-h2">
            <SplitText
              text="Wherever you are in your walk with God, there's a seat for you here."
              highlight={["seat"]}
            />
          </h2>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-xl text-body-lg text-ink-muted">
              {siteConfig.name} is a community built on the Word of God and a life of prayer. We
              believe church should be honest, alive, and practical, a place where doubt is welcome
              and encounters with God are normal.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-leaf/40 pt-8">
              {siteConfig.serviceTimes.map((s) => (
                <div key={s.label}>
                  <p className="text-h3">{s.time}</p>
                  <p className="mt-1 text-eyebrow uppercase text-gold-deep">{s.label}</p>
                </div>
              ))}
              <div>
                <p className="text-h3">Clock House</p>
                <p className="mt-1 text-eyebrow uppercase text-gold-deep">Community Centre, London</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="lg:col-span-4 lg:col-start-9 lg:pt-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-2 ring-leaf/40">
            {pastor.photo && (
              <Image
                src={pastor.photo}
                alt={`${pastor.name}, ${pastor.role}`}
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
            )}
          </div>
          <p className="mt-6 font-bold">{pastor.name}</p>
          <p className="text-caption text-gold-deep">{pastor.role}</p>
          <div className="mt-6">
            <Button href="/about" variant="ghost" arrow>
              Our story
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
