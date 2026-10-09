import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EntrepreneurWomenBanner() {
  return (
    <section className="relative bg-champagne pb-20 md:pb-28">
      <div className="wrap">
        <ScrollReveal>
          <Link
            href="/entrepreneur-womens-movement"
            className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-green-gradient p-8 text-white ring-1 ring-gold/40 sm:flex-row sm:items-center md:p-12"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/40 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-6 md:gap-8">
              <div className="relative hidden h-24 w-24 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-gold-light sm:block">
                <Image
                  src="/images/entrepreneur-women-movement-logo.jpg"
                  alt="Entrepreneur Women's Movement logo"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow !text-gold-light">Featured ministry</p>
                <h3 className="mt-4 text-h3">Entrepreneur Women&rsquo;s Movement</h3>
                <p className="mt-3 max-w-lg text-white/75">
                  Faith-fueled business and purpose-driven leadership, with mentorship and
                  community for women building kingdom enterprises.
                </p>
              </div>
            </div>
            <span className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gold-gradient text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowUpRight size={22} />
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
