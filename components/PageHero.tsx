"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-24 pt-40 text-cream grain">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brown-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-brown-300"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-balance text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-7xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/70"
          >
            {description}
          </motion.div>
        )}
      </div>
    </section>
  );
}
