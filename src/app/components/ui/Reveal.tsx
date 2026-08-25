"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type RevealPreset = "heading" | "up" | "left" | "right" | "fade";

type RevealProps = {
  children: ReactNode;
  preset?: RevealPreset;
  delay?: number;
  duration?: number;
  className?: string;
};

const initialValues = {
  heading: {
    opacity: 0,
    y: 15,
  },

  up: {
    opacity: 0,
    y: 22,
  },

  left: {
    opacity: 0,
    x: -24,
  },

  right: {
    opacity: 0,
    x: 24,
  },

  fade: {
    opacity: 0,
  },
};

export function Reveal({
  children,
  preset = "up",
  delay = 0,
  duration = 0.6,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : initialValues[preset]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
};

const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Stagger({
  children,
  className,
  delay = 0,
  duration = 0.55,
  stagger = 0.1,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {Children.map(children, (child) => (
        <motion.div
  className="h-full"
  variants={staggerItem}
  transition={{
    duration,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  {child}
</motion.div>
      ))}
    </motion.div>
  );
}
