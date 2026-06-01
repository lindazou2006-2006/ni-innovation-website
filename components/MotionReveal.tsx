"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
};

export function MotionReveal({ children, className = "", direction = "up", delay = 0 }: Props) {
  const variants = {
    up: { opacity: 0, y: 28 },
    left: { opacity: 0, x: -28 },
    right: { opacity: 0, x: 28 },
    scale: { opacity: 0, scale: .94 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
