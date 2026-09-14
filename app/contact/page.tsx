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

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We'd love to hear from you"
        title="Get in touch."
        description="Questions about a service, ministry, or event? Send us a message and our team will follow up."
      />

      <section className="bg-cream py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
          <ScrollReveal>
            <div className="space-y-8">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-navy-900/10 bg-white shadow-sm">
                    <d.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-navy-900/50">
                      {d.label}
                    </p>
                    <p className="mt-1 text-base font-medium text-navy-900">
                      {d.value}
                    </p>
                    {d.label === "Address" && (
                      <a
                        href={siteConfig.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brown-500 hover:text-brown-700"
                      >
                        <Navigation size={14} /> Get directions
                      </a>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-navy-900/10 bg-white shadow-sm">
                  <BigBenClockIcon size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy-900/50">
                    Service Times
                  </p>
                  <div className="mt-1 space-y-0.5">
                    {siteConfig.serviceTimes.map((s) => (
                      <p key={s.label} className="text-sm text-navy-900/70">
                        <span className="font-medium text-navy-900">{s.label}:</span>{" "}
                        {s.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-navy-900/10 bg-white shadow-sm">
                  <BusRoundelIcon size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy-900/50">
                    Bus Routes
                  </p>
                  <p className="mt-1 text-base font-medium text-navy-900">
                    {gettingHere.buses.join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-navy-900/10 bg-white shadow-sm">
                  <Image
                    src="/images/national-rail-logo.webp"
                    alt="National Rail"
                    width={22}
                    height={13}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy-900/50">
                    Nearest Train Station
                  </p>
                  <p className="mt-1 text-base font-medium text-navy-900">
                    {gettingHere.trainStation}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-navy-900/10 bg-white shadow-sm">
                  <DlrRoundelIcon size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy-900/50">
                    Nearest DLR Station
                  </p>
                  <p className="mt-1 text-base font-medium text-navy-900">
                    {gettingHere.dlrStation}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-navy-900/10 bg-white p-8 sm:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-sand pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl border border-navy-900/10 shadow-xl">
              <iframe
                title="Map to The Prayer Temple"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
                className="h-[400px] w-full grayscale"
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
