"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

const links = [
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
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

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const light = !scrolled && !open;
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,37,69,0.08)]"
          : isHome
            ? "border-b border-brown-300/20 bg-brown-500/15 backdrop-blur-md"
            : "border-b border-cream/15 bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/prayer-temple-logo.png"
            alt={siteConfig.name}
            width={1536}
            height={1024}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-semibold tracking-tight transition-colors",
                  light
                    ? cn("text-cream/80 hover:text-cream", active && "text-cream")
                    : cn("text-navy-900/80 hover:text-navy-900", active && "text-navy-900")
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brown-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/give"
            className="rounded-full bg-brown-500 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-brown-700"
          >
            Give
          </Link>
        </div>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn("lg:hidden transition-colors", light ? "text-cream" : "text-navy-900")}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-cream border-t border-navy/10"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-3 text-lg font-semibold text-navy-900/85 border-b border-navy/5 last:border-none",
                    pathname === link.href && "text-brown-500"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/give"
                className="mt-4 rounded-full bg-brown-500 px-5 py-3 text-center text-base font-semibold text-cream"
              >
                Give
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
