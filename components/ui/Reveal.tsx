"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Envoltura reutilizable de animación "reveal on scroll".
 * Aparece con un desplazamiento suave la primera vez que entra en pantalla.
 */
type RevealProps = {
  children: ReactNode;
  /** Retraso en segundos para escalonar elementos. */
  delay?: number;
  /** Dirección de entrada. */
  direction?: "up" | "down" | "left" | "right";
  className?: string;
};

const offset = 28;

const directions: Record<NonNullable<RevealProps["direction"]>, { x: number; y: number }> = {
  up: { x: 0, y: offset },
  down: { x: 0, y: -offset },
  left: { x: offset, y: 0 },
  right: { x: -offset, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const from = directions[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...from },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
    >
      {children}
    </motion.div>
  );
}
