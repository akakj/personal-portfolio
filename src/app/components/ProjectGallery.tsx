"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import { slides } from "@/app/data/info";

const stackLayers = [
  "translate-x-3 translate-y-2 rotate-[0.8deg] sm:translate-x-4 sm:translate-y-3",
  "translate-x-5 translate-y-4 rotate-[1.6deg] sm:translate-x-7 sm:translate-y-5",
  "translate-x-7 translate-y-6 rotate-[2.4deg] sm:translate-x-10 sm:translate-y-7",
] as const;

export default function ProjectGallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const touchStartX = useRef<number | null>(null);

  function previousSlide() {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  }

  function nextSlide() {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const difference = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStartX.current = null;
  }

  useEffect(() => {
    if (!zoomed) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setZoomed(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveSlide((current) =>
          current === 0 ? slides.length - 1 : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveSlide((current) =>
          current === slides.length - 1 ? 0 : current + 1,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomed]);

  const slide = slides[activeSlide];

  const visibleStack = stackLayers
    .slice(0, Math.max(0, Math.min(stackLayers.length, slides.length - 1)))
    .map((className, index) => {
      const offset = index + 1;
      const slideIndex = (activeSlide + offset) % slides.length;

      return {
        className,
        offset,
        slideIndex,
        item: slides[slideIndex],
      };
    })
    .reverse();

  return (
    <>
      <div className="relative">
        {/*
         * The extra right/bottom space gives the background screenshots room
         * to visibly "peek" out from behind the active screenshot.
         */}
        <div className="relative isolate pb-5 pr-5 sm:pb-8 sm:pr-8">
          <div className="relative">
            {/* Apple/iMessage-style stacked screenshots */}
            {visibleStack.map(({ className, slideIndex, item, offset }) => (
              <button
                key={`${item.darkSrc}-${offset}`}
                type="button"
                onClick={() => setActiveSlide(slideIndex)}
                aria-label={`Bring ${item.title} screenshot to the front`}
                className={`
                  absolute inset-0 z-0 overflow-hidden rounded-3xl
                  border border-pink-200/90 bg-[#f7f7f8]
                  shadow-[0_10px_28px_rgba(99,58,83,0.12)]
                  transition-all duration-300 ease-out
                  hover:brightness-[0.98]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-pink-400
                  dark:border-purple-700/50 dark:bg-[#0f0b16]
                  dark:shadow-[0_12px_30px_rgba(0,0,0,0.3)]
                  ${className}
                `}
              >
                <Image
                  src={item.lightSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  unoptimized
                  className="object-contain dark:hidden"
                />

                <Image
                  src={item.darkSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  unoptimized
                  className="hidden object-contain dark:block"
                />

                {/* Slight veil makes each layer read as a separate photo. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-white/8 dark:bg-black/8"
                />
              </button>
            ))}

            {/* Active screenshot */}
            <div
              className="
                group/gallery relative z-20 overflow-hidden rounded-3xl
                border border-pink-200/80 bg-[#f7f7f8]
                shadow-[0_16px_40px_rgba(99,58,83,0.14)]
                dark:border-purple-700/40 dark:bg-[#0f0b16]
                dark:shadow-[0_18px_45px_rgba(0,0,0,0.32)]
              "
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative aspect-16/10 w-full">
                <button
                  type="button"
                  onClick={() => setZoomed(true)}
                  className="absolute inset-0 cursor-zoom-in"
                  aria-label={`Enlarge ${slide.title} screenshot`}
                >
                  <Image
                    src={slide.lightSrc}
                    alt={`${slide.title} screenshot from Codey`}
                    fill
                    priority={activeSlide === 0}
                    sizes="(max-width: 768px) 100vw, 1100px"
                    unoptimized
                    className="object-contain dark:hidden"
                  />

                  <Image
                    src={slide.darkSrc}
                    alt={`${slide.title} screenshot from Codey`}
                    fill
                    priority={activeSlide === 0}
                    sizes="(max-width: 768px) 100vw, 1100px"
                    unoptimized
                    className="hidden object-contain dark:block"
                  />
                </button>
              </div>

              {/* Counter */}
              <div className="absolute right-3 top-3 z-30 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs text-white/90 backdrop-blur-md sm:right-5 sm:top-5">
                {activeSlide + 1} / {slides.length}
              </div>

              {/* Zoom hint */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute bottom-3 right-3 z-30
                  rounded-full border border-white/10 bg-black/45
                  px-3 py-1.5 text-xs text-white/90 opacity-0
                  backdrop-blur-md transition-opacity duration-200
                  group-hover/gallery:opacity-100
                  sm:bottom-5 sm:right-5
                "
              >
                Click to enlarge
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-1 max-w-2xl sm:mt-2">
          <h4 className="text-xl font-semibold">{slide.title}</h4>

          <p className="mt-1.5 text-sm leading-6 text-[#806b7d] dark:text-purple-200/70">
            {slide.description}
          </p>

          <p className="mt-2 text-xs text-[#a78a9f] dark:text-purple-300/50">
            Swipe the image or select a photo behind it to browse.
          </p>
        </div>
      </div>

      {zoomed &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${slide.title} screenshot viewer`}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setZoomed(false)}
          >
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Close enlarged screenshot"
              autoFocus
              className="absolute right-4 top-4 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-2xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 sm:right-6 sm:top-6"
            >
              ×
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousSlide();
              }}
              aria-label="Previous Codey screenshot"
              className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 sm:left-6 sm:h-12 sm:w-12"
            >
              <CaretLeftIcon size={22} />
            </button>

            <div
              className="relative h-[calc(100dvh-3rem)] w-[calc(100vw-7rem)] max-w-[1800px] cursor-default"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={slide.lightSrc}
                alt={`${slide.title} enlarged screenshot from Codey`}
                fill
                sizes="95vw"
                unoptimized
                className="object-contain dark:hidden"
              />

              <Image
                src={slide.darkSrc}
                alt={`${slide.title} enlarged screenshot from Codey`}
                fill
                sizes="95vw"
                unoptimized
                className="hidden object-contain dark:block"
              />
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextSlide();
              }}
              aria-label="Next Codey screenshot"
              className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 sm:right-6 sm:h-12 sm:w-12"
            >
              <CaretRightIcon size={22} />
            </button>

            <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-xs text-white/90 backdrop-blur-md sm:bottom-6">
              {activeSlide + 1} / {slides.length}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}