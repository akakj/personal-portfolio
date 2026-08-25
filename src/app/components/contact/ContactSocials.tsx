"use client";

import { motion, useReducedMotion } from "motion/react";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/icons/LinkedinLogo";

export default function ContactSocials() {
  const reduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: reduceMotion
      ? {
          opacity: 1,
          y: 0,
        }
      : {
          opacity: 0,
          y: 10,
        },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.6,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.12,
          },
        },
      }}
      className="mx-auto mt-10 flex max-w-2xl flex-col items-center"
    >
      <motion.div
        variants={itemVariants}
        className="mb-5 flex w-full items-center gap-4"
      >
        <motion.span
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "right center",
          }}
          className="h-px flex-1 bg-pink-200 dark:bg-purple-700/50"
        />

        <span
          className="
            text-xs
            uppercase
            tracking-[0.22em]
            text-[#6e5d69]
            dark:text-purple-300/70
          "
        >
          Find me online
        </span>

        <motion.span
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "left center",
          }}
          className="h-px flex-1 bg-pink-200 dark:bg-purple-700/50"
        />
      </motion.div>

      <div className="flex items-center gap-4">
        <motion.a
          variants={itemVariants}
          href="https://github.com/akakj"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full

            border
            border-pink-300
            bg-white/60

            px-4
            py-2.5

            text-sm
            font-medium
            text-[#684f62]

            transition-all

            hover:-translate-y-1
            hover:bg-white
            hover:text-[#a95179]

            dark:border-purple-700/50
            dark:bg-purple-950/30
            dark:text-purple-100

            dark:hover:border-fuchsia-300/50
            dark:hover:bg-purple-950/50
            dark:hover:text-fuchsia-200
          "
        >
          <GithubLogoIcon
            aria-hidden="true"
            className="
              h-5
              w-5
              transition-transform
              duration-300
              group-hover:-rotate-6
            "
          />

          GitHub
        </motion.a>

        <motion.a
          variants={itemVariants}
          href="https://uk.linkedin.com/in/anna-kandyba"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full

            border
            border-pink-300
            bg-white/60

            px-4
            py-2.5

            text-sm
            font-medium
            text-[#684f62]

            transition-all

            hover:-translate-y-1
            hover:bg-white
            hover:text-[#a95179]

            dark:border-purple-700/50
            dark:bg-purple-950/30
            dark:text-purple-100

            dark:hover:border-fuchsia-300/50
            dark:hover:bg-purple-950/50
            dark:hover:text-fuchsia-200
          "
        >
          <LinkedinLogoIcon
            aria-hidden="true"
            className="
              h-5
              w-5
              transition-transform
              duration-300
              group-hover:rotate-6
            "
          />

          LinkedIn
        </motion.a>
      </div>
    </motion.div>
  );
}