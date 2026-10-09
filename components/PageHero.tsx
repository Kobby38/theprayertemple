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
    <section className="relative overflow-hidden bg-green-gradient pb-16 pt-40 text-white grain md:pb-24 md:pt-52">
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-[24rem] w-[24rem] animate-float rounded-full bg-gold/30 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-[-10rem] h-[22rem] w-[22rem] animate-float rounded-full bg-lime/20 blur-[100px] [animation-delay:-8s]"
        aria-hidden="true"
      />
      <div className="wrap relative">
        <ScrollReveal y={16}>
          <p className="eyebrow !text-gold-light">{eyebrow}</p>
        </ScrollReveal>
        <h1 className="mt-6 max-w-6xl text-h1">
          <SplitText text={title} highlight={highlight} light immediate delay={0.1} />
        </h1>
        {description && (
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <ScrollReveal delay={0.35} className="md:col-span-7 md:col-start-6">
              <div className="text-body-lg text-white/80">{description}</div>
            </ScrollReveal>
          </div>
        )}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      </div>
    </section>
  );
}
