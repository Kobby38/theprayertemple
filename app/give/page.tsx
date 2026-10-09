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
        highlight={["purpose."]}
        description="Every gift is stewarded to expand the reach of the Gospel through this house and beyond it."
      />

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Where it goes"
            title="Your giving at work."
            highlight={["work."]}
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {funds.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-mist p-8 ring-1 ring-leaf/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-gradient text-gold-light">
                    <f.icon size={24} />
                  </div>
                  <h3 className="mt-8 text-h4">{f.title}</h3>
                  <p className="mt-3 text-ink-muted">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-green-gradient text-white grain">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[44rem] -translate-x-1/2 rounded-full bg-gold/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="wrap relative max-w-5xl">
          <SectionHeading
            eyebrow="Ready to give?"
            title="Ways to give."
            highlight={["give."]}
            align="center"
            light
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-3xl bg-white/5 p-8 ring-1 ring-white/15 backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-ink">
                  <Landmark size={24} />
                </div>
                <h3 className="mt-8 text-h3">Bank transfer</h3>
                <dl className="mt-6 space-y-4 text-sm">
                  {bankDetails.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-none last:pb-0"
                    >
                      <dt className="text-white/50">{d.label}</dt>
                      <dd className="font-semibold">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="h-full rounded-3xl bg-white/5 p-8 ring-1 ring-white/15 backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-ink">
                  <Wallet size={24} />
                </div>
                <h3 className="mt-8 text-h3">PayPal</h3>
                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <dt className="text-white/50">Name</dt>
                    <dd className="font-semibold">Abena Hackman</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-white/50">Email</dt>
                    <dd className="break-all font-semibold">babyjetsmile@gmail.com</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-12 max-w-xl text-center text-white/60">
              Prefer to give in person, or need a receipt? We&rsquo;re happy to help.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg" arrow>
                Contact us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
