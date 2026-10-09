"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Embers } from "@/components/ui/Embers";

/** Looping, muted worship clip with a pause/play control. */
export function WorshipVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function toggle() {
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
    <div className="relative aspect-video overflow-hidden rounded-3xl bg-night ring-1 ring-gold/30">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/sunday-worship-poster.jpg"
        aria-label="A woman worshipping with her hand raised during a church service"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/sunday-worship.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-forest/20 to-forest/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-leaf/35 mix-blend-soft-light"
        aria-hidden="true"
      />
      <Embers />
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-night/50 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-night/70"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>
    </div>
  );
}
