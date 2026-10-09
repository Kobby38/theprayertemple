"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
};

const variants = {
  primary: "bg-navy text-cream hover:bg-navy-800",
  secondary: "bg-brown-500 text-cream hover:bg-brown-700",
  ghost: "bg-transparent text-navy border border-navy/30 hover:border-navy",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-300",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.span
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={classes}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
