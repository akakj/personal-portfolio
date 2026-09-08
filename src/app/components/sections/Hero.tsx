"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";

import Sparkle from "../ui/Sparkle";
import FairyButton from "../ui/FairyButton";

const introWords = [
  {
    text: "Hello",
    delay: 0.42,
    duration: 0.68,
  },
  {
    text: "there,",
    delay: 0.88,
    duration: 0.72,
  },
  {
    text: "I'm",
    delay: 1.37,
    duration: 0.5,
  },
];

const subtitlePhrases = [
  "I grew up making things",
  "for my parents’ walls.",
  "Now I build software",
  "for the wall of the internet.",
];

type WrittenWordProps = {
  children: string;
  delay: number;
  duration?: number;
  disabled?: boolean;
  className?: string;
};

function WrittenWord({
  children,
  delay,
  duration = 0.7,
  disabled = false,
  className = "",
}: WrittenWordProps) {
  return (
    <span
      className={`
        relative inline-block
        px-[0.18em] py-[0.22em]
        mx-[-0.18em] my-[-0.22em]
        ${className}
      `}
    >
      <motion.span
        className="inline-block"
        initial={
          disabled
            ? false
            : {
                clipPath: "inset(-35% 100% -35% -20%)",
                opacity: 0.35,
                filter: "blur(1.5px)",
              }
        }
        animate={{
          clipPath: "inset(-35% -25% -35% -20%)",
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: disabled ? 0 : duration,
          delay: disabled ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

type AnnaProps = {
  disabled?: boolean;
};

function Anna({ disabled = false }: AnnaProps) {
  const delay = 1.72;
  const duration = 0.88;

  return (
    <span
      className="
        relative inline-block
        px-[0.2em] py-[0.25em]
        mx-[-0.2em] my-[-0.25em]
      "
    >
      <motion.span
        className="
          relative inline-block
          italic text-[#b1236c]
          dark:text-fuchsia-300
        "
        initial={
          disabled
            ? false
            : {
                clipPath: "inset(-40% 100% -40% -25%)",
                opacity: 0.4,
                filter: "blur(2px)",
              }
        }
        animate={{
          clipPath: "inset(-40% -30% -40% -25%)",
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: disabled ? 0 : duration,
          delay: disabled ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Anna

        {!disabled && (
          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              italic
            "
            style={{
              backgroundImage:
                "linear-gradient(110deg, transparent 28%, rgba(255,255,255,0.9) 48%, transparent 68%)",
              backgroundSize: "220% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            initial={{
              opacity: 0,
              backgroundPosition: "180% 0",
            }}
            animate={{
              opacity: [0, 0.75, 0],
              backgroundPosition: "-120% 0",
            }}
            transition={{
              duration: 0.9,
              delay: 2.25,
              times: [0, 0.45, 1],
              ease: "easeInOut",
            }}
          >
            Anna
          </motion.span>
        )}
      </motion.span>
    </span>
  );
}

type WrittenPhraseProps = {
  children: string;
  delay: number;
  disabled?: boolean;
};

function WrittenPhrase({
  children,
  delay,
  disabled = false,
}: WrittenPhraseProps) {
  return (
    <motion.span
      className="inline-block"
      initial={
        disabled
          ? false
          : {
              opacity: 0,
              clipPath: "inset(-15% 100% -15% 0%)",
              filter: "blur(1.5px)",
            }
      }
      animate={{
        opacity: 1,
        clipPath: "inset(-15% 0% -15% 0%)",
        filter: "blur(0px)",
      }}
      transition={{
        duration: disabled ? 0 : 0.65,
        delay: disabled ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const motionDisabled = Boolean(reduceMotion);

  return (
    <section
      id="home"
      className="
        mx-auto flex min-h-screen max-w-6xl
        items-center px-6 pb-20 pt-32
      "
    >
      <div className="max-w-4xl">
        {/* Developer pill */}
        <motion.div
          className="
            relative mb-6 inline-flex items-center
            rounded-full border border-pink-300
            bg-[#fcf7fc] px-5 py-2
            text-sm text-pink-700
            dark:border-purple-700/50
            dark:bg-purple-950/40
            dark:text-purple-200
          "
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.92,
                  filter: "blur(2px)",
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -left-1 -top-1
              text-pink-400
              dark:text-fuchsia-300
            "
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.2,
                    rotate: -30,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 16,
              delay: 0.02,
            }}
          >
            <Sparkle className="h-4 w-4" />
          </motion.span>

          <span className="font-medium">Software Engineer</span>
        </motion.div>

        {/* Heading */}
        <h1
          className="
            font-serif text-[2.75rem] font-medium
            leading-[1.15] tracking-tight
            text-[#492f3e]
            dark:text-[#fde9ff]
            sm:text-6xl
            lg:text-8xl
          "
        >
          <span className="sr-only">
            Hello there, I&apos;m Anna
          </span>

          {/* Mobile: simple reveal from the left */}
          <motion.span
            aria-hidden="true"
            className="block pb-[0.08em] sm:hidden"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -28,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Hello there, I&apos;m{" "}
            <span
              className="
                italic text-[#b1236c]
                dark:text-fuchsia-300
              "
            >
              Anna
            </span>
          </motion.span>

          {/* Desktop/tablet: writing animation */}
          <span
            aria-hidden="true"
            className="hidden pb-[0.08em] sm:block"
          >
            {introWords.map((word, index) => (
              <Fragment key={word.text}>
                <WrittenWord
                  delay={word.delay}
                  duration={word.duration}
                  disabled={motionDisabled}
                >
                  {word.text}
                </WrittenWord>

                {index < introWords.length - 1 && " "}
              </Fragment>
            ))}{" "}
            <Anna disabled={motionDisabled} />
          </span>
        </h1>

        {/* Description */}
        <h2
          className="
            mt-5 max-w-3xl
            text-2xl font-light leading-relaxed
            text-[#795c76]
            dark:text-purple-200
            sm:text-3xl
          "
        >
          <span className="sr-only">
            {subtitlePhrases.join(" ")}
          </span>

          {/* Mobile: softer reveal from left */}
          <motion.span
            aria-hidden="true"
            className="block sm:hidden"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -20,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {subtitlePhrases.join(" ")}
          </motion.span>

          {/* Desktop/tablet: writing animation */}
          <span
            aria-hidden="true"
            className="hidden sm:inline"
          >
            {subtitlePhrases.map((phrase, index) => (
              <Fragment key={phrase}>
                <WrittenPhrase
                  delay={2.25 + index * 0.14}
                  disabled={motionDisabled}
                >
                  {phrase}
                </WrittenPhrase>

                {index < subtitlePhrases.length - 1 && " "}
              </Fragment>
            ))}
          </span>
        </h2>

        {/* Buttons */}
        <motion.div
          className="
            mt-10 flex flex-wrap
            items-center gap-x-6 gap-y-6
          "
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8,
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
                scale: 0.96,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <FairyButton href="#projects">
              View my work
            </FairyButton>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
                scale: 0.96,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <FairyButton
              href="#contact"
              variant="secondary"
            >
              Get in touch
            </FairyButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}