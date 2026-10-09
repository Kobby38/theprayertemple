import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/SocialIcons";

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: siteConfig.social.youtube, label: "YouTube", icon: YoutubeIcon },
];

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Recordings" },
  { href: "/events", label: "Events" },
  { href: "/founder", label: "Our Pastor" },
];

const involvement = [
  { href: "/entrepreneur-womens-movement", label: "Entrepreneur Women's Movement" },
  { href: "/midnight-cry", label: "Midnight Cry" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white/70">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-leaf/15 blur-[120px]"
        aria-hidden="true"
      />
      <div className="wrap relative grid gap-14 pb-10 pt-20 md:grid-cols-2 lg:grid-cols-12 lg:pt-28">
        <div className="lg:col-span-4">
          <Image
            src="/images/prayer-temple-logo.webp"
            alt={siteConfig.name}
            width={540}
            height={360}
            className="h-24 w-auto"
          />
          <p className="mt-6 max-w-sm">
            {siteConfig.tagline}. Founded {siteConfig.founded} under the leadership of
            Prophetess Abena Hackman.
          </p>
          <ul className="mt-8 flex gap-3">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-gold-light"
                >
                  <s.icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-eyebrow uppercase text-gold-light">Explore</h2>
          <ul className="mt-6 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-eyebrow uppercase text-gold-light">Get involved</h2>
          <ul className="mt-6 space-y-3">
            {involvement.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-eyebrow uppercase text-gold-light">Gather with us</h2>
          <ul className="mt-6 space-y-4">
            {siteConfig.serviceTimes.map((s) => (
              <li key={s.label}>
                <p className="font-semibold text-white">{s.label}</p>
                <p className="text-caption">Every Sunday · {s.time}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-xs text-caption">{siteConfig.address}</p>
          <p className="mt-4 text-caption">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-light">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>

      <div className="wrap relative" aria-hidden="true">
        <p className="gold-text select-none text-center text-[15vw] font-extrabold leading-[0.85] tracking-[-0.05em] lg:text-[13.5vw] 2xl:text-[12rem]">
          Prayer Temple
        </p>
      </div>

      <div className="wrap relative flex flex-col gap-3 border-t border-white/10 py-8 text-caption md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>A house of prayer for every nation.</p>
      </div>
    </footer>
  );
}
