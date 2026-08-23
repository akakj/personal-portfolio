"use client";

import type { ReactNode } from "react";

type OrnamentalButtonProps = {
  children: ReactNode;
  label: ReactNode;
  ariaLabel: string;
  onClick: () => void;
  pressed?: boolean;
};

export default function OrnamentalButton({
  children,
  label,
  ariaLabel,
  onClick,
  pressed,
}: OrnamentalButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={pressed}
      className="
        group
        flex
        h-10
        cursor-pointer
        items-center
        gap-2
        rounded-full
        px-2
        text-sm
        font-medium
        text-[#694f67]
        transition-all
        duration-300

        hover:bg-white/25
        hover:text-pink-700

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-pink-400
        focus-visible:ring-offset-2

        dark:text-purple-200
        dark:hover:bg-white/5
        dark:hover:text-white
        dark:focus-visible:ring-fuchsia-300
      "
    >
      {/* Six-petal flower */}
      <span
        className="
          relative
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
        "
      >
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0.5
            opacity-70
            transition-all
            duration-500
            group-hover:rotate-12
            group-hover:opacity-100
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
              border-pink-300/60
              bg-pink-50/60
              dark:border-purple-400/35
              dark:bg-purple-800/20
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
              border-pink-300/60
              bg-pink-50/60
              dark:border-purple-400/35
              dark:bg-purple-800/20
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
              border-pink-300/60
              bg-pink-50/60
              dark:border-purple-400/35
              dark:bg-purple-800/20
            "
          />
        </span>

        {/* Centre */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            h-5
            w-5
            rounded-full
            bg-[#ffddf0]/80
            dark:bg-[#371c59]/80
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
            text-pink-600
            dark:text-purple-200
          "
        >
          {children}
        </span>
      </span>

      <span className="whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}