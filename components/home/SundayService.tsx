import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data";

export function SundayService() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-28 text-cream grain">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brown-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky/20 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
        <ScrollReveal className="mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-cream/10">
            <Image
              src="/images/sunday-service-worship-hands.jpg"
              alt="A worshipper with hand raised during a Sunday church service"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brown-300">
            Join us in person
          </p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Sunday Service
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70">
            Worship, praise, and preaching every Sunday. Come as you are; we&rsquo;d
            love to have you.
          </p>

          <div className="mt-8 flex flex-col gap-4 text-base font-medium text-cream/80">
            <span className="flex items-center gap-3">
              <Clock size={18} className="text-brown-300" />
              Every Sunday, {siteConfig.serviceTimes[0]?.time}
            </span>
            <span className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0 text-brown-300" />
              {siteConfig.address}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
