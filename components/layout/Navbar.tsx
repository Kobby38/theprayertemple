"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

const links = [
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Recordings" },
  { href: "/events", label: "Events" },
  { href: "/entrepreneur-womens-movement", label: "Entrepreneur Women" },
  { href: "/midnight-cry", label: "Midnight Cry" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const light = !scrolled && !open;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500",
        scrolled && !open
          ? "border-b border-gold/30 bg-white/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      )}
    >
      <nav className="wrap flex items-center justify-between gap-8" aria-label="Main">
        <Link href="/" className="relative z-10 flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/prayer-temple-logo.webp"
            alt={siteConfig.name}
            width={540}
            height={360}
            priority
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <ul className="hidden items-center lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative whitespace-nowrap px-3 py-2 text-[0.9rem] font-medium transition-colors",
                  light
                    ? isActive(link.href)
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : isActive(link.href)
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gold-light"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/give" arrow className="!px-6 !py-3">
            Give
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
            light ? "border-white/30 bg-white/10 backdrop-blur" : "border-ink/10 bg-white"
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3 w-5">
            <motion.span
              className={cn("absolute left-0 top-0 h-[2px] w-5 rounded", light ? "bg-white" : "bg-ink")}
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className={cn("absolute bottom-0 left-0 h-[2px] w-5 rounded", light ? "bg-white" : "bg-ink")}
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 flex flex-col overflow-y-auto bg-white px-5 pb-10 pt-28 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 42px) 42px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 42px) 42px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 42px) 42px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {[{ label: "Home", href: "/" }, ...links].map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      aria-current={
                        (link.href === "/" ? pathname === "/" : isActive(link.href))
                          ? "page"
                          : undefined
                      }
                      className="flex items-baseline gap-4 py-1 text-4xl font-extrabold tracking-tight text-ink aria-[current=page]:text-gold-deep sm:text-5xl"
                    >
                      <span className="text-caption font-semibold text-gold-deep">
                        0{i + 1}
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-4 border-t border-gold/30 pt-6">
              <Button href="/give" arrow>
                Give
              </Button>
              <p className="text-caption text-ink-muted">
                <span className="font-semibold text-ink">Sunday Service</span> · Every Sunday{" "}
                {siteConfig.serviceTimes[0]?.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
