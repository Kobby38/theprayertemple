"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  /** Words (case-insensitive, punctuation ignored) to render in the gold gradient. */
  highlight?: string[];
  className?: string;
  delay?: number;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
};

const normalize = (w: string) => w.replace(/[^\w']/g, "").toLowerCase();

/** Word-by-word masked reveal. Screen readers get the plain sentence. */
export function SplitText({
  text,
  highlight = [],
  className,
  delay = 0,
  immediate = false,
}: SplitTextProps) {
  const words = text.split(" ");
  const marks = highlight.map(normalize);
  const trigger = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "-60px" } };

  return (
    <motion.span
      className={cn("block", className)}
      initial="hidden"
      {...trigger}
      transition={{
        staggerChildren: Math.min(0.07, 1.1 / words.length),
        delayChildren: delay,
      }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className={cn("inline-block", marks.includes(normalize(word)) && "gold-text")}
                variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </span>
    </motion.span>
  );
}
