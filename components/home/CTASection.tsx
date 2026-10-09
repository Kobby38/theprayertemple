import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-28 text-cream grain">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-brown-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky/20 blur-[100px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brown-300">
            Join us this week
          </p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Come as you are. Leave changed.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
            Whether it&rsquo;s your first time or you&rsquo;ve been part of the
            family for years, there&rsquo;s always room at The Prayer Temple.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Plan your visit <ArrowRight size={18} />
            </Button>
            <Button
              href="/give"
              variant="ghost"
              size="lg"
              className="border-cream/25 text-cream hover:border-cream"
            >
              Give online
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
