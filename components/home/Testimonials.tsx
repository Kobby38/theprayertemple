"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="section relative bg-white">
      <div className="wrap">
        <SectionHeading
          eyebrow="Changed lives"
          title="Stories from our house."
          highlight={["house."]}
          align="center"
        />

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 break-inside-avoid rounded-3xl bg-ivory p-8 ring-1 ring-gold/25"
            >
              <Quote className="text-gold" size={30} />
              <blockquote className="mt-5 leading-relaxed text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-gold/30 pt-5">
                <p className="font-bold">{t.name}</p>
                <p className="mt-1 text-eyebrow uppercase text-gold-deep">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
