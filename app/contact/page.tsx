import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Prayer Temple.",
};

const details = [
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
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
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-brown-300">
                    <d.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-navy-900/50">
                      {d.label}
                    </p>
                    <p className="mt-1 text-base font-medium text-navy-900">
                      {d.value}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-brown-300">
                  <Clock size={18} />
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
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-navy-900/10 bg-white p-8 sm:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
