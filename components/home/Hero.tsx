"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Pause, Play } from "lucide-react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section ref={ref} className="relative overflow-hidden bg-green-gradient pb-16 pt-36 text-white grain md:pb-20 md:pt-44">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/worship-poster.jpg"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
      >
        <source src="/videos/worship-hands.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={toggleVideo}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-6 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-night/30 text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-night/50 lg:right-12"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-[6%] -top-[12%] h-[26rem] w-[26rem] animate-float rounded-full bg-gold/35 blur-[100px]" />
        <div className="absolute -left-[8%] bottom-[-14%] h-[22rem] w-[22rem] animate-float rounded-full bg-lime/25 blur-[100px] [animation-delay:-7s]" />
      </div>

      <div className="wrap relative">
        <motion.div {...fade(0.1)} className="flex flex-wrap items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-light" />
          </span>
          <p className="text-caption font-medium text-white/80">
            Join us for <span className="font-semibold text-white">{service.label}</span> · Every
            Sunday, {service.time} · London
          </p>
        </motion.div>

        <motion.h1 style={{ y: headlineY }} className="mt-8 text-display">
          <SplitText text="A house of prayer" highlight={["prayer"]} light immediate delay={0.2} />
          <SplitText text="for every nation." immediate delay={0.45} />
        </motion.h1>

        <div className="mt-10 grid items-end gap-10 md:mt-14 md:grid-cols-12">
          <motion.p {...fade(0.85)} className="max-w-md text-body-lg text-white/80 md:col-span-5">
            Sound teaching, fervent prayer, and authentic community, led by Prophetess Abena
            Hackman.
          </motion.p>
          <motion.div {...fade(1)} className="flex flex-wrap gap-3 md:col-span-7 md:justify-end">
            <Button href="/contact" arrow>
              Plan your visit
            </Button>
            <Button href="/sermons" variant="light">
              Watch recordings
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
