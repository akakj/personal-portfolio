"use client";

import { motion, useReducedMotion } from "motion/react";

import SectionHeading from "../ui/SectionHeading";
import Sparkle from "../ui/Sparkle";
import ProjectGallery from "../projects/ProjectGallery";
import ProjectDetails from "../projects/ProjectDetails";

export default function Projects() {
  const reduceMotion = useReducedMotion();

  const headingContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.18,
      },
    },
  };

  const headingItem = {
    hidden: reduceMotion
      ? {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }
      : {
          opacity: 0,
          y: 8,
          filter: "blur(3px)",
        },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="03" title="My brewery" />

      <motion.p
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 8,
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
          duration: reduceMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="-mt-8 text-sm italic text-[#755f72] dark:text-purple-200/70 sm:text-base"
      >
        Projects I&apos;ve brewed, built, and brought to life
      </motion.p>

      <motion.article
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 24,
                scaleY: 0.98,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          scaleY: 1,
        }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "top center",
        }}
        className="
          relative
          mt-6
          overflow-hidden
          rounded-4xl

          border
          border-pink-200
          bg-white/60

          p-4

          text-[#43283c]

          shadow-sm
          shadow-pink-100
          backdrop-blur-sm

          sm:p-6
          lg:p-8

          dark:border-purple-700/40
          dark:bg-[#160b22]/65
          dark:text-purple-50
          dark:shadow-none
        "
      >
        {/* Decorative glows */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20

            h-72
            w-72
            rounded-full

            bg-pink-200/30
            blur-3xl

            dark:bg-fuchsia-700/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-28
            -left-20

            h-72
            w-72
            rounded-full

            bg-purple-200/25
            blur-3xl

            dark:bg-purple-700/10
          "
        />

        {/* Project heading */}
        <motion.header
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.8,
          }}
          className="
            relative
            mb-8
            flex
            flex-col
            gap-5

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <motion.div
              variants={headingItem}
              className="mb-3 flex items-center gap-2"
            >
              <motion.span
                aria-hidden="true"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.6,
                        rotate: -15,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: [0.6, 1.2, 1],
                  rotate: [-15, 8, 0],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-flex"
              >
                <Sparkle className="h-4 w-4 text-pink-400 dark:text-fuchsia-300" />
              </motion.span>

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#b12f73] dark:text-fuchsia-300">
                Featured project
              </span>
            </motion.div>

            <motion.h3
              variants={headingItem}
              className="text-4xl font-semibold"
            >
              Codey
            </motion.h3>

            <motion.p
              variants={headingItem}
              className="mt-2 text-lg italic text-[#755f72] dark:text-purple-200/70"
            >
              Build. Run. Analyse.
            </motion.p>
          </div>
        </motion.header>

        <ProjectGallery />

        <ProjectDetails />
      </motion.article>
    </section>
  );
}