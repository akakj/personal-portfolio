"use client";

import { motion, useReducedMotion } from "motion/react";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { features, projects } from "@/app/data/info";
import Sparkle from "../ui/Sparkle";

export default function ProjectDetails() {
  const project = projects[0];
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.14,
      },
    },
  };

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
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
      {/* Project details */}
      <div className="relative mt-10 grid gap-10 border-t border-pink-200/70 pt-9 lg:grid-cols-[1.15fr_0.85fr] dark:border-purple-700/30">
        {/* Description + technologies */}
        <motion.div variants={itemVariants}>
          <h4 className="text-xl font-semibold">
            Full-stack coding practice platform
          </h4>

          <p className="hidden sm:block mt-4 max-w-2xl text-sm leading-7 text-[#755f72] dark:text-purple-200/70 sm:text-base">
            Codey is a full-stack coding practice platform for solving
            algorithm problems, executing code and tracking progress. It
            combines an integrated code editor, multi-language execution,
            test-case evaluation, authentication, submission history and a
            personalised analytics dashboard.
          </p>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project?.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full

                  border
                  border-pink-200/70

                  bg-pink-50/80

                  px-3
                  py-1.5

                  text-xs
                  text-pink-700

                  dark:border-purple-700/40
                  dark:bg-purple-900/50
                  dark:text-purple-200
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div variants={itemVariants}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#b12f73] dark:text-fuchsia-300">
            Highlights
          </p>

          <ul className="space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-6 text-[#6f596a] dark:text-purple-100/80"
              >
                <span
                  aria-hidden="true"
                  className="
                    mt-2
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full

                    bg-pink-400

                    shadow-[0_0_8px_rgba(244,114,182,0.6)]

                    dark:bg-fuchsia-400
                  "
                />

                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

     {/* Project links */}
<motion.footer
  variants={itemVariants}
  className="relative mt-10 flex flex-wrap items-center gap-6"
>
  {project?.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="
        group/codey
        relative
        inline-flex
        items-center
        gap-2.5
        overflow-hidden
        rounded-full

        border
        border-[#fc91c331]

        bg-[#fbb8d4]

        px-6
        py-3

        text-sm
        font-semibold
        text-[#43283c]

        shadow-[0_5px_18px_rgba(217,107,158,0.18)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-0.5
        hover:border-[#ff97c98e]
        hover:shadow-[0_7px_22px_rgba(217,107,158,0.28)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-pink-400
        focus-visible:ring-offset-2

        dark:border-purple-300/50
        dark:bg-purple-200
        dark:text-purple-950
        dark:shadow-[0_5px_20px_rgba(216,180,254,0.10)]

        dark:hover:border-fuchsia-200/70
        dark:hover:bg-[#e8c6fa]
        dark:hover:shadow-[0_7px_24px_rgba(216,180,254,0.18)]

        dark:focus-visible:ring-fuchsia-300
        dark:focus-visible:ring-offset-[#0b0310]
      "
    >
      {/* Soft internal shimmer */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          -translate-x-full

          bg-linear-to-r
          from-transparent
          via-white/45
          to-transparent

          transition-transform
          duration-700
          ease-out

          group-hover/codey:translate-x-full

          dark:from-transparent
          dark:via-purple-500/20
          dark:to-transparent
        "
      />

      <Sparkle
        className="
          relative
          z-10

          h-3.5
          w-3.5

          transition-transform
          duration-500
          ease-out

          group-hover/codey:rotate-12
          group-hover/codey:scale-110
        "
      />

      <span className="relative z-10">View Codey</span>

      <ArrowUpRightIcon
        size={15}
        weight="bold"
        className="
          relative
          z-10
          shrink-0

          transition-transform
          duration-300
          ease-out

          group-hover/codey:translate-x-0.5
          group-hover/codey:-translate-y-0.5
        "
      />
    </a>
  )}

  {/* GitHub */}
  <a
    href={project?.github ?? "https://github.com/akakj/Codey"}
    target="_blank"
    rel="noreferrer"
    className="
      group/github
      inline-flex
      items-center
      gap-2.5
      rounded-full

      px-2
      py-3

      text-sm
      font-medium
      text-[#6f596a]

      transition-colors
      duration-300

      hover:text-pink-600

      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-pink-400
      focus-visible:ring-offset-2

      dark:text-purple-200
      dark:hover:text-fuchsia-200

      dark:focus-visible:ring-fuchsia-300
      dark:focus-visible:ring-offset-[#0b0310]
    "
  >
    <GithubLogoIcon
      size={21}
      weight="fill"
      className="
        shrink-0

        transition-transform
        duration-1050
        ease-out

        group-hover/github:rotate-80
      "
    />

    <span>GitHub</span>

    <ArrowUpRightIcon
      size={15}
      weight="bold"
      className="
        shrink-0

        transition-transform
        duration-300
        ease-out

        group-hover/github:translate-x-0.5
        group-hover/github:-translate-y-0.5
      "
    />
  </a>
</motion.footer>
      
    </motion.div>
  );
}