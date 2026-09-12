"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Changed lives"
          title="Stories from our house."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-8"
            >
              <Quote className="text-brown-300" size={28} />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy-900/75">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-900/8 pt-4">
                <p className="text-sm font-bold text-navy-900">{t.name}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-brown-500">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
