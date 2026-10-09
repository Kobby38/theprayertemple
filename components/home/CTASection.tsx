import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/SplitText";

export function CTASection() {
  return (
    <section className="section relative overflow-hidden bg-forest text-white grain">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-leaf/25 blur-[120px]"
        aria-hidden="true"
      />
      <div className="wrap relative text-center">
        <p className="eyebrow justify-center !text-gold-light">Join us this week</p>
        <h2 className="mx-auto mt-6 max-w-5xl text-h1">
          <SplitText text="Come as you are. Leave changed." highlight={["changed."]} />
        </h2>
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-body-lg text-white/70">
            Whether it&rsquo;s your first time or you&rsquo;ve been part of the family for years,
            there&rsquo;s always room at The Prayer Temple.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/contact" arrow>
              Plan your visit
            </Button>
            <Button href="/give" variant="light">
              Give online
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
