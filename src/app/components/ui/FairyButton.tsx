import type { ReactNode } from "react";
import Sparkle from "./Sparkle";

type FairyButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function FairyButton({
  href,
  children,
  variant = "primary",
}: FairyButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      className={`
        group relative inline-flex items-center justify-center
        rounded-full px-7 py-3
        text-sm font-semibold
        transition-all duration-300 ease-out
        hover:-translate-y-0.5
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-pink-400
        focus-visible:ring-offset-2
        dark:focus-visible:ring-fuchsia-300
        dark:focus-visible:ring-offset-[#0b0310]

        ${
          isPrimary
            ? `
              bg-[#e991b6]
              text-white
              shadow-[0_5px_18px_rgba(217,107,158,0.16)]
              hover:bg-[#dd7eaa]
              hover:shadow-[0_7px_24px_rgba(217,107,158,0.28)]

              dark:bg-purple-200
              dark:text-purple-950
              dark:shadow-[0_5px_20px_rgba(232,190,255,0.12)]
              dark:hover:bg-fuchsia-200
              dark:hover:shadow-[0_7px_26px_rgba(232,190,255,0.22)]
            `
            : `
              border border-pink-200
              bg-white/60
              text-[#684c65]
              shadow-[0_4px_16px_rgba(217,107,158,0.05)]
              hover:border-pink-300
              hover:bg-pink-50/80
              hover:shadow-[0_6px_20px_rgba(217,107,158,0.12)]

              dark:border-purple-700
              dark:bg-purple-950/30
              dark:text-purple-100
              dark:shadow-none
              dark:hover:border-purple-500
              dark:hover:bg-purple-900/50
              dark:hover:shadow-[0_6px_20px_rgba(192,132,252,0.12)]
            `
        }
      `}
    >
      {/* Glow */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute inset-1 -z-10
          rounded-full opacity-0 blur-lg
          transition-opacity duration-300
          group-hover:opacity-100
          ${
            isPrimary
              ? "bg-pink-300/35 dark:bg-fuchsia-300/20"
              : "bg-pink-200/25 dark:bg-purple-400/15"
          }
        `}
      />

      {/* Top centred ornament */}
      <svg
        aria-hidden="true"
        viewBox="0 0 80 28"
        fill="none"
        className={`
          pointer-events-none
          absolute
          left-1/2

          -top-2.5
          h-5
          w-14
          -translate-x-1/2

          sm:-top-3.75
          sm:h-7
          sm:w-19

          overflow-visible

          transition-all
          duration-500
          ease-out

          group-hover:-translate-x-1/2
          group-hover:-translate-y-0.5
          group-hover:scale-[1.04]

          ${
            isPrimary
              ? "text-[#f84d78bd] dark:text-[#9b5dd5ea]"
              : "text-[#d276a3af] dark:text-[#dbb5ffce]"
          }
        `}
      >
        {/* Main decorative stroke */}
        <path
          d="
            M4 21
            C13 21 15 15 22 15
            C29 15 31 19 40 19
            C49 19 51 15 58 15
            C65 15 67 21 76 21
          "
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        {/* Centre upward curl */}
        <path
          d="
            M40 19
            C35 16 34 11 37 8
            C40 5 45 7 45 11
            C45 14 42 15 40 13
          "
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
        />

        {/* Left curl */}
        <path
          d="
            M22 15
            C18 12 18 8 21 7
            C24 6 26 8 25 10
          "
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Right curl */}
        <path
          d="
            M58 15
            C62 12 62 8 59 7
            C56 6 54 8 55 10
          "
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Left leaf */}
        <path
          d="
            M25 15
            C20 11 15 11 14 15
            C17 18 22 18 25 15Z
          "
          fill="currentColor"
          className="
            origin-center
            transition-transform
            duration-500
            group-hover:rotate-[-8deg]
          "
        />

        {/* Centre leaf */}
        <path
          d="
            M39 9
            C37 4 39 1 43 2
            C45 6 43 9 39 9Z
          "
          fill="currentColor"
          className="
            origin-center
            transition-transform
            duration-500
            group-hover:rotate-[7deg]
          "
        />

        {/* Right leaf */}
        <path
          d="
            M55 15
            C60 11 65 11 66 15
            C63 18 58 18 55 15Z
          "
          fill="currentColor"
          className="
            origin-center
            transition-transform
            duration-500
            group-hover:rotate-[8deg]
          "
        />
      </svg>

      {/* Left sparkle */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-1
          top-1/2
          -translate-y-1/2
          scale-50
          opacity-0

          text-pink-500

          transition-all
          duration-300

          group-hover:-left-2
          group-hover:scale-100
          group-hover:opacity-100

          dark:text-fuchsia-200
        "
      >
        <Sparkle className="h-2.5 w-2.5" />
      </span>

      {/* Small sparkle near ornament */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[68%]
          -top-2.25

          scale-0
          opacity-0

          text-pink-400

          transition-all
          delay-75
          duration-300

          group-hover:scale-100
          group-hover:opacity-100

          dark:text-fuchsia-200
        "
      >
        <Sparkle className="h-2 w-2" />
      </span>

      <span className="relative z-10">{children}</span>
    </a>
  );
}