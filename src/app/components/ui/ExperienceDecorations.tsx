import type { ReactNode } from "react";

import Sparkle from "../ui/Sparkle";

export function FairyPill({ children }: { children: ReactNode }) {
  return (
    <span
      className="
        group relative inline-flex overflow-hidden
        rounded-full
        border border-pink-300/80
        bg-pink-50/55
        px-3 py-1
        text-sm
        text-[#6f596a]

        transition-all duration-300 ease-out

        hover:-translate-y-0.5
        hover:border-pink-400/80
        hover:bg-pink-50/90
        hover:text-[#9f376e]
        hover:shadow-[0_4px_16px_rgba(236,72,153,0.14)]

        dark:border-purple-800/70
        dark:bg-[#371c5990]
        dark:text-purple-200/70

        dark:hover:border-fuchsia-400/45
        dark:hover:bg-[#422267]
        dark:hover:text-purple-100
        dark:hover:shadow-[0_4px_18px_rgba(217,70,239,0.14)]

        motion-reduce:transform-none
        motion-reduce:transition-none
      "
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -inset-2
          opacity-0 blur-md

          bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.18),transparent_65%)]

          transition-opacity duration-300

          group-hover:opacity-100

          dark:bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.14),transparent_65%)]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 -left-8
          w-7 rotate-12

          bg-linear-to-r
          from-transparent
          via-white/55
          to-transparent

          opacity-0

          transition-all duration-700 ease-out

          group-hover:left-[110%]
          group-hover:opacity-70

          dark:via-fuchsia-100/15
        "
      />

      <span className="relative z-10">{children}</span>
    </span>
  );
}

export function Subheading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-7 flex items-center gap-2.5">
      <Sparkle
        className="
          h-3.5 w-3.5
          text-pink-400
          dark:text-fuchsia-300
        "
      />

      <h3
        className="
          text-2xl font-semibold
          text-[#43283c]
          dark:text-purple-50
        "
      >
        {children}
      </h3>

      <span
        aria-hidden="true"
        className="
          ml-2 h-px flex-1
          bg-linear-to-r
          from-pink-200
          to-transparent

          dark:from-purple-700/60
        "
      />
    </div>
  );
}

export function VineDivider() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        bottom-2 left-1/2 top-2
        hidden w-10
        -translate-x-1/2

        md:block
      "
    >
      <svg
        viewBox="0 0 40 620"
        preserveAspectRatio="none"
        className="
          h-full w-full
          overflow-visible
          text-pink-300/45

          dark:text-purple-500/35
        "
        fill="none"
      >
        <path
          d="
            M20 0
            C10 55, 30 95, 19 150
            C8 205, 31 255, 20 310
            C10 365, 31 415, 19 470
            C9 520, 30 570, 20 620
          "
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        <path
          d="M19 100 C11 91, 7 87, 3 88"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        <ellipse
          cx="7"
          cy="88"
          rx="4.5"
          ry="1.8"
          transform="rotate(25 7 88)"
          fill="currentColor"
          opacity="0.7"
        />

        <path
          d="M20 220 C27 210, 32 207, 37 208"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        <ellipse
          cx="33"
          cy="208"
          rx="4.5"
          ry="1.8"
          transform="rotate(-25 33 208)"
          fill="currentColor"
          opacity="0.7"
        />

        <path
          d="M20 350 C12 341, 7 338, 3 339"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        <ellipse
          cx="7"
          cy="339"
          rx="4.5"
          ry="1.8"
          transform="rotate(26 7 339)"
          fill="currentColor"
          opacity="0.7"
        />

        <path
          d="M19 480 C27 471, 32 468, 37 470"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        <ellipse
          cx="33"
          cy="469"
          rx="4.5"
          ry="1.8"
          transform="rotate(-24 33 469)"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

export function DesktopGlows() {
  return (
    <>
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-28 -top-32
          hidden h-80 w-80
          rounded-full
          bg-pink-200/20
          blur-3xl

          md:block

          md:dark:bg-fuchsia-600/8
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          hidden h-64 w-64
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-pink-200/10
          blur-3xl

          md:block

          md:dark:bg-fuchsia-600/4
        "
      />
    </>
  );
}

export function MobileCardGlow() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute -left-20 -top-20
        h-48 w-48
        rounded-full
        bg-pink-200/15
        blur-3xl

        dark:bg-fuchsia-600/5

        md:hidden
      "
    />
  );
}