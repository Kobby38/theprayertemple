import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EntrepreneurWomenBanner() {
  return (
    <section className="relative bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <Link
            href="/entrepreneur-womens-movement"
            className="group flex flex-col justify-between gap-6 overflow-hidden rounded-2xl bg-navy-900 p-10 text-cream sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-6">
              <div className="relative hidden h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-brown-300/40 sm:block">
                <Image
                  src="/images/entrepreneur-women-movement-logo.jpg"
                  alt="Entrepreneur Women's Movement logo"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brown-300">
                  Featured
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Entrepreneur Women&rsquo;s Movement
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-cream/65">
                  Faith-fueled business and purpose-driven leadership, with
                  mentorship and community for women building kingdom
                  enterprises.
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-brown-300 transition-transform group-hover:translate-x-1">
              Learn more <ArrowRight size={16} />
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
