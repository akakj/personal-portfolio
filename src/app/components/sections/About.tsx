"use client";

import { motion, useReducedMotion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(5px)",
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="01" title="About me" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          className="
            relative overflow-hidden
            rounded-[2.5rem]
            border border-pink-300/60
            bg-white/45
            px-8 py-12
            shadow-[inset_0_0_55px_rgba(244,114,182,0.035)]
            backdrop-blur-[2px]

            md:px-14
            md:py-14

            dark:border-purple-700/40
            dark:bg-purple-950/25
            dark:shadow-[inset_0_0_55px_rgba(217,70,239,0.035)]
          "
          variants={cardVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          {/* Static corner sparkle */}
          <span
            aria-hidden="true"
            className="
              absolute right-8 top-7
              text-lg text-pink-400/90
              dark:text-fuchsia-300/80
            "
          >
            ✦
          </span>

          {/* Currently */}
          <motion.div
            className="flex items-center justify-center gap-3"
            variants={revealVariants}
            custom={0.15}
          >
            <span
              aria-hidden="true"
              className="text-[8px] text-pink-400 dark:text-fuchsia-300"
            >
              ✦
            </span>

            <p
              className="
                text-xs font-semibold uppercase
                tracking-[0.3em]
                text-[#b12f73]
                dark:text-fuchsia-300
              "
            >
              Currently
            </p>

            <span
              aria-hidden="true"
              className="text-[8px] text-pink-400 dark:text-fuchsia-300"
            >
              ✦
            </span>
          </motion.div>

          {/* Storybook subtitle */}
          <motion.p
            className="
              mt-5 text-center
              font-serif text-2xl italic
              text-[#4b315d]

              sm:text-3xl

              dark:text-purple-100
            "
            variants={revealVariants}
            custom={0.27}
          >
            A little chapter of where I am now
          </motion.p>

          {/* First row */}
          <div
            className="
              mt-10 grid
              gap-x-16 gap-y-10

              sm:grid-cols-2

              md:mt-12
            "
          >
            <InfoRow
              label="Based in"
              value="United Kingdom"
              delay={0.4}
            />

            <InfoRow
              label="Studying"
              value="Computer Science"
              delay={0.52}
            />
          </div>

          {/* Static middle ornament */}
          <div
            aria-hidden="true"
            className="
              my-8 flex items-center justify-center
              gap-3
              text-pink-300/80
              dark:text-purple-500/70
            "
          >
            <span className="h-px w-9 bg-current opacity-40" />

            <span className="text-[8px]">✦</span>

            <span className="h-px w-9 bg-current opacity-40" />
          </div>

          {/* Second row */}
          <div
            className="
              grid
              gap-x-16 gap-y-10

              sm:grid-cols-2
            "
          >
            <InfoRow
              label="Focus"
              value="Software Engineering"
              delay={0.68}
            />

            <InfoRow
              label="Open to"
              value="Graduate & internship roles"
              delay={0.8}
            />
          </div>

          {/* Static bottom ornament */}
          <div
            aria-hidden="true"
            className="
              mx-auto mt-11
              flex items-center justify-center
              gap-3
              text-pink-300/80
              dark:text-purple-500/70
            "
          >
            <span className="h-px w-12 bg-current opacity-30" />

            <span className="text-[7px]">✧</span>

            <span className="h-px w-12 bg-current opacity-30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
  delay: number;
};

function InfoRow({ label, value, delay }: InfoRowProps) {
  return (
    <motion.div
      className="group text-center"
      variants={revealVariants}
      custom={delay}
    >
      <p
        className="
          text-[11px] uppercase
          tracking-[0.24em]
          text-[#8b7185]
          dark:text-purple-400
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2
          font-medium
          text-[#39254f]

          transition-all
          duration-300
          ease-out

          group-hover:-translate-y-0.5
          group-hover:text-[#8f3366]

          dark:text-purple-100
          dark:group-hover:text-fuchsia-200
        "
      >
        {value}
      </p>
    </motion.div>
  );
}