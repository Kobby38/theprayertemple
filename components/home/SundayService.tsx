import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/SplitText";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data";

export function SundayService() {
  return (
    <section className="section relative overflow-hidden bg-green-gradient text-white grain">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-gold/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-leaf/25 blur-[130px]"
        aria-hidden="true"
      />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow !text-gold-light">Join us in person</p>
          <h2 className="mt-6 text-h2">
            <SplitText text="Sunday Service." highlight={["Service."]} />
          </h2>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-body-lg text-white/70">
              Worship, praise, and preaching every Sunday. Come as you are; we&rsquo;d love to have
              you.
            </p>
            <dl className="mt-8 space-y-5 border-t border-white/10 pt-8">
              <div className="flex items-start gap-4">
                <Clock size={20} className="mt-0.5 flex-shrink-0 text-gold-light" />
                <div>
                  <dt className="text-caption text-white/50">When</dt>
                  <dd className="mt-1 font-semibold">
                    Every Sunday, {siteConfig.serviceTimes[0]?.time}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-gold-light" />
                <div>
                  <dt className="text-caption text-white/50">Where</dt>
                  <dd className="mt-1 font-semibold">{siteConfig.address}</dd>
                </div>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={siteConfig.mapsLink} external arrow>
                Get directions
              </Button>
              <Button href="/contact" variant="light">
                Plan your visit
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-gold/30">
            <Image
              src="/images/sunday-service-worship-hands.jpg"
              alt="A worshipper with hand raised during a Sunday church service"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
