"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark" | "ghost" | "light";
  size?: "md" | "lg";
  type?: "button" | "submit";
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

const variants = {
  primary:
    "bg-gold-gradient bg-[length:200%_auto] bg-left text-ink shadow-[0_10px_30px_-10px_rgba(201,162,39,0.7)] hover:bg-right",
  secondary: "border border-ink/15 bg-white text-ink hover:border-gold hover:bg-ivory",
  dark: "bg-forest text-white hover:bg-forest-soft",
  ghost: "text-ink hover:text-gold-deep",
  light: "border border-white/25 text-white hover:border-gold-light hover:text-gold-light",
};

const sizes = {
  md: "px-7 py-3.5 text-[0.92rem]",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  external,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  arrow = false,
  className,
  children,
}: ButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });
  const magnetic = variant === "primary";

  function handleMove(e: React.PointerEvent) {
    if (!magnetic || !ref.current || e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-[background-position,background-color,border-color,color] duration-500 ease-out",
    variant === "ghost" ? "py-2" : sizes[size],
    variants[variant],
    className
  );

  const content = (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  let inner: ReactNode;
  if (href && external) {
    inner = (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  } else if (href) {
    inner = (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  } else {
    inner = (
      <button type={type} onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <motion.span
      ref={ref}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="inline-block"
    >
      {inner}
    </motion.span>
  );
}
