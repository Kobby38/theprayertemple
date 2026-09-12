import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data";

export function Welcome() {
  return (
    <section id="welcome" className="relative bg-cream py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
        <SectionHeading
          eyebrow="Welcome home"
          title="Wherever you are in your walk with God, there's a seat for you here."
        />
        <ScrollReveal delay={0.15} className="flex flex-col justify-center">
          <p className="text-lg leading-relaxed text-navy-900/70">
            {siteConfig.name} is a community built on the Word of God and a
            life of prayer. We believe church should be honest, alive, and
            practical, a place where doubt is welcome and encounters with
            God are normal.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-navy-900/10 pt-8">
            {siteConfig.serviceTimes.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold tracking-tight text-navy-900">
                  {s.time}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-navy-900/50">
                  {s.label}
                </p>
              </div>
            ))}
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-navy-900">
                Clock House
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-navy-900/50">
                Community Centre, London
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
