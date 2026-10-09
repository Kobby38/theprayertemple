"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/data";

const tones = [
  { card: "bg-green-gradient text-white ring-gold/40", quote: "text-gold-light", text: "text-white/90", rule: "border-white/20", role: "text-gold-light" },
  { card: "bg-gold-gradient text-ink ring-gold/60", quote: "text-night", text: "text-ink/90", rule: "border-ink/20", role: "text-night" },
  { card: "bg-white text-ink ring-leaf/40", quote: "text-leaf", text: "text-ink/80", rule: "border-leaf/30", role: "text-gold-deep" },
];

export function Testimonials() {
  return (
    <section className="section relative bg-champagne">
      <div className="wrap">
        <SectionHeading
          eyebrow="Changed lives"
          title="Stories from our house."
          highlight={["house."]}
          align="center"
        />

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => {
            const tone = tones[i % tones.length];
            return (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn("mb-6 break-inside-avoid rounded-3xl p-8 ring-1", tone.card)}
              >
                <Quote className={tone.quote} size={30} />
                <blockquote className={cn("mt-5 leading-relaxed", tone.text)}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className={cn("mt-6 border-t pt-5", tone.rule)}>
                  <p className="font-bold">{t.name}</p>
                  <p className={cn("mt-1 text-eyebrow uppercase", tone.role)}>{t.role}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
