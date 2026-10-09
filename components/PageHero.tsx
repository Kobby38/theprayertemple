import type { ReactNode } from "react";
import { SplitText } from "@/components/ui/SplitText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Words to render in the gold gradient. */
  highlight?: string[];
  description?: ReactNode;
};

/** Large editorial header used at the top of every inner page. */
export function PageHero({ eyebrow, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-40 md:pb-24 md:pt-52">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gold-light/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-leaf/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="wrap relative">
        <ScrollReveal y={16}>
          <p className="eyebrow">{eyebrow}</p>
        </ScrollReveal>
        <h1 className="mt-6 max-w-6xl text-h1">
          <SplitText text={title} highlight={highlight} immediate delay={0.1} />
        </h1>
        {description && (
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <ScrollReveal delay={0.35} className="md:col-span-7 md:col-start-6">
              <div className="text-body-lg text-ink-muted">{description}</div>
            </ScrollReveal>
          </div>
        )}
        <div className="gold-rule mt-16" />
      </div>
    </section>
  );
}
