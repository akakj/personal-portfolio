"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, type TouchEventHandler } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import { slides } from "@/app/data/info";

type ProjectSlide = {
  lightSrc: string;
  darkSrc: string;
  mobileLightSrc: string;
  mobileDarkSrc: string;
  title: string;
  description: string;
};


type FullscreenGalleryViewerProps = {
  slide: ProjectSlide;
  activeSlide: number;
  slideCount: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onTouchStart: TouchEventHandler<HTMLDivElement>;
  onTouchEnd: TouchEventHandler<HTMLDivElement>;
};

export default function FullscreenGalleryViewer({
  slide,
  activeSlide,
  slideCount,
  onClose,
  onPrevious,
  onNext,
  onTouchStart,
  onTouchEnd,
}: FullscreenGalleryViewerProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${slide.title} screenshot viewer`}
      className="
        fixed inset-0 z-9999
        flex items-center justify-center
        bg-black/90 p-3
        backdrop-blur-md
        sm:p-6
      "
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close enlarged screenshot"
        autoFocus
        className="
          absolute right-4 top-4 z-30
          flex h-11 w-11
          cursor-pointer
          items-center justify-center
          rounded-full
          border border-white/20
          bg-black/70
          text-2xl text-white
          backdrop-blur-md
          transition

          hover:scale-105
          hover:bg-black/80

          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-fuchsia-300

          sm:right-6 sm:top-6
        "
      >
        ×
      </button>

      {/* Desktop previous button */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous Codey screenshot"
        className="
          absolute left-6 top-1/2 z-30
          hidden h-12 w-12
          -translate-y-1/2
          cursor-pointer
          items-center justify-center
          rounded-full
          border border-white/20
          bg-black/70
          text-white
          backdrop-blur-md
          transition

          hover:scale-105
          hover:bg-black/80

          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-fuchsia-300

          sm:flex
        "
      >
        <CaretLeftIcon size={22} />
      </button>

      {/* Screenshot */}
      <div
        className="
          relative
          flex
          h-[calc(100dvh-3rem)]
          w-[calc(100vw-1.5rem)]
          max-w-[1800px]
          cursor-default
          items-center justify-center
          sm:w-[calc(100vw-7rem)]
        "
        onClick={(event) => event.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Mobile / portrait — light */}
        <Image
          src={slide.mobileLightSrc}
          alt={`${slide.title} enlarged screenshot from Codey`}
          width={1200}
          height={1500}
          priority
          unoptimized
          className="
            h-auto
            max-h-[calc(100dvh-9rem)]
            w-auto
            max-w-full
            rounded-xl
            object-contain

            dark:hidden
            sm:hidden
          "
        />

        {/* Mobile / portrait — dark */}
        <Image
          src={slide.mobileDarkSrc}
          alt={`${slide.title} enlarged screenshot from Codey`}
          width={1200}
          height={1500}
          priority
          unoptimized
          className="
            hidden
            h-auto
            max-h-[calc(100dvh-9rem)]
            w-auto
            max-w-full
            rounded-xl
            object-contain

            dark:block
            sm:dark:hidden
          "
        />

        {/* Desktop — light */}
        <Image
          src={slide.lightSrc}
          alt={`${slide.title} enlarged screenshot from Codey`}
          width={1600}
          height={1000}
          priority
          unoptimized
          className="
            hidden
            h-auto
            max-h-[calc(100dvh-3rem)]
            w-auto
            max-w-full
            rounded-3xl
            object-contain

            sm:block
            dark:hidden
          "
        />

        {/* Desktop — dark */}
        <Image
          src={slide.darkSrc}
          alt={`${slide.title} enlarged screenshot from Codey`}
          width={1600}
          height={1000}
          priority
          unoptimized
          className="
            hidden
            h-auto
            max-h-[calc(100dvh-3rem)]
            w-auto
            max-w-full
            rounded-3xl
            object-contain

            sm:dark:block
          "
        />
      </div>

      {/* Desktop next button */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next Codey screenshot"
        className="
          absolute right-6 top-1/2 z-30
          hidden h-12 w-12
          -translate-y-1/2
          cursor-pointer
          items-center justify-center
          rounded-full
          border border-white/20
          bg-black/70
          text-white
          backdrop-blur-md
          transition

          hover:scale-105
          hover:bg-black/80

          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-fuchsia-300

          sm:flex
        "
      >
        <CaretRightIcon size={22} />
      </button>

      {/* Mobile navigation */}
      <div
        className="
          absolute bottom-4 left-1/2 z-30
          flex -translate-x-1/2
          items-center gap-3
          sm:hidden
        "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrevious}
          aria-label="Previous Codey screenshot"
          className="
            flex h-11 w-11
            cursor-pointer
            items-center justify-center
            rounded-full
            border border-white/20
            bg-black/70
            text-white
            backdrop-blur-md
            transition

            hover:scale-105
            hover:bg-black/80

            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-fuchsia-300
          "
        >
          <CaretLeftIcon size={22} />
        </button>

        <div
          className="
            rounded-full
            border border-white/20
            bg-black/70
            px-4 py-2
            text-xs text-white
            backdrop-blur-md
          "
        >
          {activeSlide + 1} / {slideCount}
        </div>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next Codey screenshot"
          className="
            flex h-11 w-11
            cursor-pointer
            items-center justify-center
            rounded-full
            border border-white/20
            bg-black/70
            text-white
            backdrop-blur-md
            transition

            hover:scale-105
            hover:bg-black/80

            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-fuchsia-300
          "
        >
          <CaretRightIcon size={22} />
        </button>
      </div>

      {/* Desktop slide counter */}
      <div
        className="
          absolute bottom-6 left-1/2 z-30
          hidden -translate-x-1/2
          rounded-full
          border border-white/20
          bg-black/70
          px-4 py-1.5
          text-xs text-white
          backdrop-blur-md

          sm:block
        "
      >
        {activeSlide + 1} / {slideCount}
      </div>
    </div>,
    document.body,
  );
}