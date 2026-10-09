import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Navigation } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BusRoundelIcon, DlrRoundelIcon } from "@/components/icons/TransportIcons";
import {
  BigBenClockIcon,
  BigBenTowerIcon,
  PhoneBoxIcon,
} from "@/components/icons/BritishIcons";
import { gettingHere, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Prayer Temple.",
};

const details = [
  { icon: BigBenTowerIcon, label: "Address", value: siteConfig.address },
  { icon: PhoneBoxIcon, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
];

const iconChip =
  "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-gold/40";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We'd love to hear from you"
        title="Get in touch."
        highlight={["touch."]}
        description="Questions about a service, ministry, or event? Send us a message and our team will follow up."
      />

      <section className="bg-white pb-24 pt-16 md:pb-32">
        <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <div className="space-y-8">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className={iconChip}>
                    <d.icon size={22} />
                  </div>
                  <div>
                    <p className="text-eyebrow uppercase text-gold-deep">{d.label}</p>
                    <p className="mt-2 font-medium">{d.value}</p>
                    {d.label === "Address" && (
                      <a
                        href={siteConfig.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-colors hover:text-ink"
                      >
                        <Navigation size={14} /> Get directions
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <div className={iconChip}>
                  <BigBenClockIcon size={22} />
                </div>
                <div>
                  <p className="text-eyebrow uppercase text-gold-deep">Service Times</p>
                  <div className="mt-2 space-y-0.5">
                    {siteConfig.serviceTimes.map((s) => (
                      <p key={s.label} className="text-ink-muted">
                        <span className="font-medium text-ink">{s.label}:</span> {s.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={iconChip}>
                  <BusRoundelIcon size={22} />
                </div>
                <div>
                  <p className="text-eyebrow uppercase text-gold-deep">Bus Routes</p>
                  <p className="mt-2 font-medium">{gettingHere.buses.join(", ")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={iconChip}>
                  <Image
                    src="/images/national-rail-logo.webp"
                    alt="National Rail"
                    width={22}
                    height={13}
                  />
                </div>
                <div>
                  <p className="text-eyebrow uppercase text-gold-deep">Nearest Train Station</p>
                  <p className="mt-2 font-medium">{gettingHere.trainStation}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={iconChip}>
                  <DlrRoundelIcon size={22} />
                </div>
                <div>
                  <p className="text-eyebrow uppercase text-gold-deep">Nearest DLR Station</p>
                  <p className="mt-2 font-medium">{gettingHere.dlrStation}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-3xl bg-mist p-8 ring-1 ring-leaf/40 sm:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-champagne pb-24 pt-16 md:pb-32">
        <div className="wrap">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl ring-1 ring-gold/40">
              <iframe
                title="Map to The Prayer Temple"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
