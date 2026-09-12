import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram", abbr: "IG" },
  { href: siteConfig.social.youtube, label: "YouTube", abbr: "YT" },
  { href: siteConfig.social.facebook, label: "Facebook", abbr: "FB" },
];

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
];

const involvement = [
  { href: "/entrepreneur-womens-movement", label: "Entrepreneur Women's Movement" },
  { href: "/midnight-cry", label: "Midnight Cry" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/prayer-temple-logo.png"
              alt={siteConfig.name}
              width={1536}
              height={1024}
              className="h-20 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {siteConfig.tagline}. Founded {siteConfig.founded} under the
              leadership of Prophetess Abena Hackman.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-[11px] font-bold tracking-wide transition-colors hover:border-brown-300 hover:text-brown-300"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brown-300">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brown-300">
              Get Involved
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {involvement.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brown-300">
              Service Times
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {siteConfig.serviceTimes.map((s) => (
                <li key={s.label} className="flex flex-col">
                  <span className="text-cream">{s.label}</span>
                  <span>{s.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.address}</p>
        </div>
      </div>
    </footer>
  );
}
