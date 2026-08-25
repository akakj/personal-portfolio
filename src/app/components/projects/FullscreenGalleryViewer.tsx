"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, type TouchEventHandler } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import { slides } from "@/app/data/info";

type ProjectSlide = (typeof slides)[number];

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

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous Codey screenshot"
        className="
          absolute left-3 top-1/2 z-30
          flex h-11 w-11
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

          sm:left-6 sm:h-12 sm:w-12
        "
      >
        <CaretLeftIcon size={22} />
      </button>

      <div
        className="
          relative
          flex
          h-[calc(100dvh-3rem)]
          w-[calc(100vw-7rem)]
          max-w-[1800px]
          cursor-default
          items-center justify-center
        "
        onClick={(event) => event.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={slide.lightSrc}
          alt={`${slide.title} enlarged screenshot from Codey`}
          width={1600}
          height={1000}
          priority
          unoptimized
          className="
            h-auto
            max-h-[calc(100dvh-3rem)]
            w-auto
            max-w-full
            rounded-3xl
            object-contain
            dark:hidden
          "
        />

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
            dark:block
          "
        />
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next Codey screenshot"
        className="
          absolute right-3 top-1/2 z-30
          flex h-11 w-11
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

          sm:right-6 sm:h-12 sm:w-12
        "
      >
        <CaretRightIcon size={22} />
      </button>

      <div
        className="
          absolute bottom-4 left-1/2 z-30
          -translate-x-1/2
          rounded-full
          border border-white/20
          bg-black/70
          px-4 py-1.5
          text-xs text-white
          backdrop-blur-md
          sm:bottom-6
        "
      >
        {activeSlide + 1} / {slideCount}
      </div>
    </div>,
    document.body,
  );
}