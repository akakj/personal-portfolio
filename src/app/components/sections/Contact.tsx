"use client";

import { motion, useReducedMotion } from "motion/react";

import Sparkle from "../ui/Sparkle";
import ContactHeader from "../contact/ContactHeader";
import ContactForm from "../contact/ContactForm";
import ContactSocials from "../contact/ContactSocials";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-28 pt-32">
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 28,
                scaleY: 0.97,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          scaleY: 1,
        }}
        viewport={{
          once: true,
          amount: 0.12,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "top center",
        }}
        className="
          relative
          overflow-hidden
          rounded-[2.5rem]
          border
          border-pink-300
          bg-linear-to-br
          from-white/80
          to-pink-100/70
          px-7
          py-16
          sm:px-14
          sm:py-20

          dark:border-purple-700/70
          dark:from-purple-950/60
          dark:to-fuchsia-950/20
        "
      >
        <motion.div
          className="pointer-events-none absolute left-[8%] top-[12%]"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.4, 0.9, 0.4],
                  scale: [0.85, 1.1, 0.85],
                  rotate: [0, 10, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkle className="h-5 w-5 text-pink-400/60 dark:text-fuchsia-300/70" />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-[12%] right-[8%]"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.35, 0.75, 0.35],
                  scale: [0.9, 1.15, 0.9],
                  rotate: [0, -12, 0],
                }
          }
          transition={{
            duration: 4.8,
            delay: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkle className="h-3 w-3 text-purple-300/70 dark:text-purple-300/70" />
        </motion.div>

        <div className="relative z-10">
          <ContactHeader />
          <ContactForm />
          <ContactSocials />
        </div>
      </motion.div>
    </section>
  );
}