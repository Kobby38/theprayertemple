"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Pause, Play } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { siteConfig } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
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
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-navy-900 pt-32 text-cream grain">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/worship-poster.jpg"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover grayscale"
      >
        <source src="/videos/worship-hands.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-navy-900/70" />
      <button
        type="button"
        onClick={toggleVideo}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-navy-900/40 text-cream backdrop-blur-sm transition-colors hover:border-cream/50 hover:bg-navy-900/60 lg:right-10"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>
      <div className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-brown-500/25 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-slate/25 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-40 right-10 h-80 w-80 rounded-full bg-sky/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(6,15,34,0.6)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-xs font-bold uppercase tracking-[0.35em] text-brown-300"
          >
            {siteConfig.name} · Est. {siteConfig.founded}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-[13vw] font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl"
          >
            A house of
            <br />
            <span className="text-brown-300">prayer</span> for every
            <br />
            nation.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/70"
          >
            {siteConfig.name} exists to see lives transformed through sound
            teaching, fervent prayer, and authentic community, led by
            Prophetess Abena Hackman.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative mt-20 border-y border-cream/10 bg-cream/5 py-4 text-cream/70">
        <Marquee text="Join us on Sundays at 2pm BST · Clock House Community Centre, London SE18 5QL" />
      </div>

      <motion.a
        href="#welcome"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cream/50 sm:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
