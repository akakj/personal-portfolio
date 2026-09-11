"use client";

import Image from "next/image";
import type { TouchEventHandler } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import { slides } from "@/app/data/info";

type ProjectSlide = (typeof slides)[number];

type StorybookGalleryProps = {
  slide: ProjectSlide;
  activeSlide: number;
  slideCount: number;
  onPrevious: () => void;
  onNext: () => void;
  onZoom: () => void;
  onTouchStart: TouchEventHandler<HTMLDivElement>;
  onTouchEnd: TouchEventHandler<HTMLDivElement>;
};

export default function StorybookGallery({
  slide,
  activeSlide,
  slideCount,
  onPrevious,
  onNext,
  onZoom,
  onTouchStart,
  onTouchEnd,
}: StorybookGalleryProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pb-3 pr-3 sm:pb-4 sm:pr-4"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/*
        Keep the padding OUTSIDE the relative page stack.

        This makes every absolute page exactly the same size as the
        current page, so the translations below create equal spacing.
      */}
      <div className="relative">
        {/* STACKED PAGE EDGES */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            translate-x-2.25 translate-y-2.25
            rounded-4xl
            border border-pink-200/30
            bg-[#fcecf5]
            shadow-[0_12px_28px_rgba(113,65,96,0.05)]

            dark:border-purple-700/15
            dark:bg-[#140b1c]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            translate-x-1.5 translate-y-1.5
            rounded-4xl
            border border-pink-200/45
            bg-[#fff3f9]

            dark:border-purple-700/20
            dark:bg-[#191022]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            translate-x-0.75 translate-y-0.75
            rounded-4xl
            border border-pink-200/70
            bg-[#fff9fc]

            dark:border-purple-700/30
            dark:bg-[#201429]
          "
        />

        {/* CURRENT PAGE */}
        <div
          className="
            group
            relative
            z-10
            overflow-hidden
            rounded-4xl

            border
            border-pink-200/90

            bg-[linear-gradient(145deg,#fffdfd_0%,#fff8fc_55%,#fffafc_100%)]

            shadow-[0_16px_40px_rgba(111,65,96,0.11)]

            dark:border-purple-700/40
            dark:bg-[linear-gradient(145deg,#21152b_0%,#190f23_55%,#160d20_100%)]
            dark:shadow-[0_18px_50px_rgba(0,0,0,0.25)]
          "
        >
          {/* BOOK SPINE / BINDING */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-7
              left-0
              top-7
              z-30

              w-1.25
              rounded-r-full

              bg-linear-to-r
              from-pink-300/35
              via-pink-200/15
              to-transparent

              dark:from-purple-500/25
              dark:via-purple-500/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-9
              left-1.5
              top-9
              z-30

              w-px

              bg-linear-to-b
              from-transparent
              via-[#c999b8]/30
              to-transparent

              dark:via-purple-400/15
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20

              w-12

              bg-linear-to-r
              from-pink-200/6
              to-transparent

              dark:from-purple-950/15
            "
          />

          {/* PAGE HEADER */}
          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-between

              px-5
              pb-3
              pt-5

              sm:px-10
              sm:pb-4
              sm:pt-6
            "
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="text-sm text-pink-400 dark:text-fuchsia-300"
              >
                ✦
              </span>

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#755f72]

                  sm:text-xs

                  dark:text-purple-200/70
                "
              >
                Codey
              </span>
            </div>

            <span
              className="
                text-[11px]
                italic
                text-[#755f72]

                sm:text-xs

                dark:text-purple-200/70
              "
            >
              Page {activeSlide + 1} / {slideCount}
            </span>
          </div>

          {/* SCREENSHOT / ILLUSTRATION */}
          <div className="relative z-20 px-3 sm:px-9">
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.35rem]

                border
                border-pink-200/80

                bg-[#f7f7f8]

                shadow-[0_8px_24px_rgba(117,73,103,0.10)]

                dark:border-purple-700/40
                dark:bg-[#0f0b16]
                dark:shadow-[0_10px_28px_rgba(0,0,0,0.30)]
              "
            >
              <div className="relative aspect-16/10 w-full">
                <button
                  type="button"
                  onClick={onZoom}
                  aria-label={`Enlarge ${slide.title} screenshot`}
                  className="
                    absolute
                    inset-0

                    cursor-zoom-in

                    focus-visible:outline-2
                    focus-visible:-outline-offset-2
                    focus-visible:outline-[#b12f73]

                    dark:focus-visible:outline-fuchsia-300
                  "
                >
                  <Image
                    src={slide.lightSrc}
                    alt={`${slide.title} screenshot from Codey`}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 7rem), (max-width: 1152px) calc(100vw - 10rem), 950px"
                    className="object-contain dark:hidden"
                  />

                  <Image
                    src={slide.darkSrc}
                    alt={`${slide.title} screenshot from Codey`}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 7rem), (max-width: 1152px) calc(100vw - 10rem), 950px"
                    className="hidden object-contain dark:block"
                  />
                </button>
              </div>

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-linear-to-t
                  from-black/4
                  via-transparent
                  to-transparent

                  opacity-0

                  transition-opacity
                  duration-300

                  group-hover:opacity-100
                "
              />
            </div>

            {/* PAGE-TURN ARROWS */}
            <button
              type="button"
              onClick={onPrevious}
              aria-label="Previous project screenshot"
              className="
                pointer-events-none
                absolute
                left-5
                top-1/2
                z-40

                hidden
                h-11
                w-11

                -translate-x-2
                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-white/60

                bg-white/75
                text-[#704d68]

                opacity-0

                shadow-[0_5px_18px_rgba(86,45,73,0.14)]
                backdrop-blur-md

                transition-all
                duration-300

                group-hover:pointer-events-auto
                group-hover:translate-x-0
                group-hover:opacity-100

                hover:scale-105
                hover:bg-white
                hover:text-[#b12f73]

                focus-visible:pointer-events-auto
                focus-visible:opacity-100
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#b12f73]

                sm:flex

                dark:border-purple-400/20
                dark:bg-[#261833]/80
                dark:text-purple-100

                dark:hover:bg-[#30203e]
                dark:hover:text-fuchsia-200

                dark:focus-visible:outline-fuchsia-300
              "
            >
              <CaretLeftIcon size={20} weight="bold" />
            </button>

            <button
              type="button"
              onClick={onNext}
              aria-label="Next project screenshot"
              className="
                pointer-events-none
                absolute
                right-5
                top-1/2
                z-40

                hidden
                h-11
                w-11

                translate-x-2
                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-white/60

                bg-white/75
                text-[#704d68]

                opacity-0

                shadow-[0_5px_18px_rgba(86,45,73,0.14)]
                backdrop-blur-md

                transition-all
                duration-300

                group-hover:pointer-events-auto
                group-hover:translate-x-0
                group-hover:opacity-100

                hover:scale-105
                hover:bg-white
                hover:text-[#b12f73]

                focus-visible:pointer-events-auto
                focus-visible:opacity-100
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#b12f73]

                sm:flex

                dark:border-purple-400/20
                dark:bg-[#261833]/80
                dark:text-purple-100

                dark:hover:bg-[#30203e]
                dark:hover:text-fuchsia-200

                dark:focus-visible:outline-fuchsia-300
              "
            >
              <CaretRightIcon size={20} weight="bold" />
            </button>
          </div>

          {/* STORYBOOK CAPTION */}
          <div
            className="
              relative
              z-20

              px-5
              pb-5
              pt-5

              sm:px-10
              sm:pb-6
              sm:pt-6
            "
          >
            {/* Animated ornamental divider */}
            <div aria-hidden="true" className="mb-4 flex items-center gap-3">
              <motion.span
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: "right center",
                }}
                className="
                  h-px
                  w-8

                  bg-linear-to-r
                  from-transparent
                  to-pink-300/80

                  dark:to-purple-500/40
                "
              />

              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.6,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: [0.6, 1.25, 1],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[9px] text-pink-400/80 dark:text-fuchsia-300/60"
              >
                ✦
              </motion.span>

              <motion.span
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: "left center",
                }}
                className="
                  h-px
                  w-12

                  bg-linear-to-r
                  from-pink-300/80
                  to-transparent

                  dark:from-purple-500/40
                "
              />
            </div>

            {/* Replays whenever the page changes */}
            <motion.div
              key={activeSlide}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 6,
                      filter: "blur(2px)",
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h4
                className="
                  text-xl
                  font-semibold
                  text-[#462451]

                  sm:text-2xl

                  dark:text-purple-50
                "
              >
                {slide.title}
              </h4>

              <p
                className="
                  mt-2
                  h-18
                  max-w-3xl
                  text-sm
                  leading-6
                  text-[#755f72]

                  sm:h-21
                  sm:text-[15px]
                  sm:leading-7

                  dark:text-purple-200/70
                "
              >
                {slide.description}
              </p>
            </motion.div>

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                gap-4

                text-[11px]
                italic
                text-[#755f72]

                dark:text-purple-200/70
              "
            >
              <span className="sm:hidden">Swipe to turn the page</span>

              <span className="hidden sm:inline">
                Hover to turn the page · Click the illustration to enlarge
              </span>

              <span
                aria-hidden="true"
                className="text-pink-400/70 dark:text-fuchsia-300/50"
              >
                ✧
              </span>
            </div>

            <div
              aria-hidden="true"
              className="
                mx-auto
                mb-1
                mt-5

                flex
                w-28
                items-center
                gap-2

                text-pink-300/80

                dark:text-fuchsia-300/30
              "
            >
              <span className="h-px flex-1 bg-current" />
              <span className="text-[8px]">✦</span>
              <span className="h-px flex-1 bg-current" />
            </div>
          </div>

          {/* SMALL PAGE DECORATIONS */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-5
              right-6
              z-20

              text-xs
              text-pink-300/60

              dark:text-fuchsia-300/30
            "
          >
            ✦
          </span>

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-10
              top-16
              z-20

              text-[8px]
              text-pink-300/50

              dark:text-purple-300/25
            "
          >
            ✧
          </span>
        </div>
      </div>
    </div>
  );
}