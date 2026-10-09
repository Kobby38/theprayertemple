"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Small gold dot that trails the pointer and grows over links and buttons. Desktop only. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const enable = window.setTimeout(() => setEnabled(true), 0);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest("a, button, input, textarea, select, label, [role='button']")
      );
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.clearTimeout(enable);
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-gold"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovering ? 44 : 10,
        height: hovering ? 44 : 10,
        opacity: hovering ? 0.35 : 0.9,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}
