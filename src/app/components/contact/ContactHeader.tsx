"use client";

import { motion, useReducedMotion } from "motion/react";

const headingWords = ["Let's", "create", "something", "together."];

export default function ContactHeader() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="text-center">
      <motion.p
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 8,
                letterSpacing: "0.42em",
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          letterSpacing: "0.3em",
        }}
        viewport={{
          once: true,
          amount: 0.8,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.75,
          delay: reduceMotion ? 0 : 0.18,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mb-4
          text-xs
          font-semibold
          uppercase
          text-[#b12f73]
          dark:text-fuchsia-300
        "
      >
        A little ✦ magic ✦ begins with hello
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: reduceMotion ? 0 : 0.25,
              staggerChildren: reduceMotion ? 0 : 0.14,
            },
          },
        }}
        className="font-serif text-4xl font-medium sm:text-5xl"
      >
        {headingWords.map((word) => (
          <motion.span
            key={word}
            variants={{
              hidden: reduceMotion
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                    y: 8,
                    filter: "blur(4px)",
                  },

              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: reduceMotion ? 0 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="mr-[0.22em] inline-block last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      <motion.p
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 10,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.8,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.65,
          delay: reduceMotion ? 0 : 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-auto
          mt-6
          max-w-xl
          leading-7
          text-[#7c6678]
          dark:text-purple-200/70
        "
      >
        I&apos;m always interested in new opportunities, interesting projects,
        and conversations about software development.
      </motion.p>
    </div>
  );
}