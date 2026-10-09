import type { Metadata } from "next";
import { Building2, HandHeart, Landmark, Sprout, Wallet } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Give",
  description: "Partner with the vision of The Prayer Temple through giving.",
};

const funds = [
  {
    icon: Building2,
    title: "Tithes & Offering",
    body: "Sustains weekly ministry, staffing, and the day-to-day life of the church.",
  },
  {
    icon: Sprout,
    title: "Missions & Outreach",
    body: "Fuels city outreach and missions partnerships taking the Gospel beyond our walls.",
  },
  {
    icon: HandHeart,
    title: "Building Fund",
    body: "Invests in the physical spaces where our community gathers, grows, and worships.",
  },
];

const bankDetails = [
  { label: "Bank", value: "Halifax / Lloyds Bank" },
  { label: "Account name", value: "Abena Hackman" },
  { label: "Account number", value: "13862365" },
  { label: "Sort code", value: "11-09-68" },
];

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Generosity"
        title="Give with purpose."
        description="Every gift is stewarded to expand the reach of the Gospel through this house and beyond it."
      />

      <section className="bg-cream py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Where it goes" title="Your giving at work." />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {funds.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-brown-300">
                    <f.icon size={22} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-navy-900">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
                    {f.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-28 text-cream grain">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-brown-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky/20 blur-[100px]" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Ready to give?"
            title="Ways to give."
            align="center"
            light
            className="mx-auto"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-2xl border border-cream/10 bg-cream/5 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brown-500 text-cream">
                  <Landmark size={22} />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight">Bank transfer</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  {bankDetails.map((d) => (
                    <div key={d.label} className="flex items-center justify-between gap-4 border-b border-cream/10 pb-3 last:border-none last:pb-0">
                      <dt className="text-cream/50">{d.label}</dt>
                      <dd className="font-semibold">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="h-full rounded-2xl border border-cream/10 bg-cream/5 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brown-500 text-cream">
                  <Wallet size={22} />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight">PayPal</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4 border-b border-cream/10 pb-3">
                    <dt className="text-cream/50">Name</dt>
                    <dd className="font-semibold">Abena Hackman</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-cream/50">Email</dt>
                    <dd className="font-semibold">babyjetsmile@gmail.com</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-cream/60">
              Prefer to give in person, or need a receipt? We&rsquo;re happy to help.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact" size="lg">
                Contact us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
