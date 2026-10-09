"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/ui/SplitText";
import { siteConfig } from "@/lib/data";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const service = siteConfig.serviceTimes[0];

  return (
    <section ref={ref} className="relative overflow-hidden bg-white pb-10 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-[10%] -top-[20%] h-[42rem] w-[42rem] animate-float rounded-full bg-gold-light/35 blur-[120px]" />
        <div className="absolute -right-[15%] top-[10%] h-[36rem] w-[36rem] animate-float rounded-full bg-mist blur-[100px] [animation-delay:-6s]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[28rem] w-[28rem] animate-float rounded-full bg-leaf/10 blur-[110px] [animation-delay:-11s]" />
      </div>

      <div className="wrap relative">
        <motion.div {...fade(0.1)} className="flex flex-wrap items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
          </span>
          <p className="text-caption font-medium text-ink-muted">
            Join us for <span className="font-semibold text-ink">{service.label}</span> · Every
            Sunday, {service.time} · London
          </p>
        </motion.div>

        <motion.h1 style={{ y: headlineY }} className="mt-8 text-display">
          <SplitText text="A house of prayer" highlight={["prayer"]} immediate delay={0.2} />
          <SplitText text="for every nation." immediate delay={0.45} />
        </motion.h1>

        <div className="mt-10 grid items-end gap-10 md:mt-14 md:grid-cols-12">
          <motion.p {...fade(0.85)} className="max-w-md text-body-lg text-ink-muted md:col-span-5">
            Sound teaching, fervent prayer, and authentic community, led by Prophetess Abena
            Hackman.
          </motion.p>
          <motion.div {...fade(1)} className="flex flex-wrap gap-3 md:col-span-7 md:justify-end">
            <Button href="/contact" arrow>
              Plan your visit
            </Button>
            <Button href="/sermons" variant="secondary">
              Watch recordings
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
