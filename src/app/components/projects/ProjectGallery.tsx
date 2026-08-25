"use client";

import { useCallback, useRef, useState, type TouchEvent } from "react";

import { slides } from "@/app/data/info";

import FullscreenGalleryViewer from "./FullscreenGalleryViewer";
import StorybookGallery from "./StorybookGallery";

export default function ProjectGallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const previousSlide = useCallback(() => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  }, []);

  const closeZoom = useCallback(() => {
    setZoomed(false);
  }, []);

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

  const slide = slides[activeSlide];

  return (
    <>
      <StorybookGallery
        slide={slide}
        activeSlide={activeSlide}
        slideCount={slides.length}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onZoom={() => setZoomed(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />

      {zoomed && (
        <FullscreenGalleryViewer
          slide={slide}
          activeSlide={activeSlide}
          slideCount={slides.length}
          onClose={closeZoom}
          onPrevious={previousSlide}
          onNext={nextSlide}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
      )}
    </>
  );
}