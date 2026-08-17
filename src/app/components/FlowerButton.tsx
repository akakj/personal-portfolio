"use client";

import type { ReactNode } from "react";

type FlowerButtonProps = {
  children: ReactNode;
  "aria-label": string;
  onClick: () => void;
  "aria-pressed"?: boolean;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
  size?: "normal" | "large";
};

export default function FlowerButton({
  children,
  "aria-label": ariaLabel,
  onClick,
  "aria-pressed": ariaPressed,
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
  size = "normal",
}: FlowerButtonProps) {
  const buttonSize =
    size === "large"
      ? "h-12 w-12"
      : "h-11 w-11";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={`
        group
        relative
        flex
        ${buttonSize}
        shrink-0
        cursor-pointer
        items-center
        justify-center
        text-pink-700
        transition-transform
        duration-300
        hover:scale-105
        active:scale-95
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-pink-400
        focus-visible:ring-offset-2
        dark:text-purple-100
        dark:focus-visible:ring-fuchsia-300
      `}
    >
      {/* Six-petal flower */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-1.25
          transition-transform
          duration-500
          ease-out
          group-hover:rotate-12
        "
      >
        {/* Top + bottom */}
        <span
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-[56%]
            -translate-x-1/2
            rounded-[50%]
            border
            border-pink-300/80
            bg-[#fff5fe]/90
            shadow-[0_0_10px_rgba(244,114,182,0.18)]
            transition-colors
            dark:border-purple-500/60
            dark:bg-purple-950/70
            dark:shadow-[0_0_12px_rgba(216,180,254,0.12)]
          "
        />

        {/* Upper-right + lower-left */}
        <span
          className="
            absolute
            left-1/2
            top-1/2
            h-full
            w-[56%]
            -translate-x-1/2
            -translate-y-1/2
            rotate-60
            rounded-[50%]
            border
            border-pink-300/75
            bg-[#fff5fe]/85
            transition-colors
            dark:border-purple-500/55
            dark:bg-purple-950/68
          "
        />

        {/* Upper-left + lower-right */}
        <span
          className="
            absolute
            left-1/2
            top-1/2
            h-full
            w-[56%]
            -translate-x-1/2
            -translate-y-1/2
            rotate-120
            rounded-[50%]
            border
            border-pink-300/75
            bg-[#fff5fe]/85
            transition-colors
            dark:border-purple-500/55
            dark:bg-purple-950/68
          "
        />
      </span>

      {/* Centre */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          h-7
          w-7
          rounded-full
          bg-white/75
          shadow-[0_0_8px_rgba(255,255,255,0.55)]
          backdrop-blur-sm
          transition-colors
          dark:bg-[#29123f]/85
          dark:shadow-none
        "
      />

      {/* Icon */}
      <span
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        {children}
      </span>
    </button>
  );
}