"use client";

import { useTheme } from "@teispace/next-themes";

import { navigation } from "@/app/data/info";
import Sparkle from "../ui/Sparkle";
import Vine from "../ui/Vine";
import OrnamentalButton from "../ui/OrnamentalButton";

import {
  MusicNotesIcon,
  StarAndCrescentIcon,
  SunDimIcon,
} from "@phosphor-icons/react";

type DesktopNavbarProps = {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
};

export default function DesktopNavbar({
  isMusicPlaying,
  onToggleMusic,
}: DesktopNavbarProps) {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <div
      className="
        hidden
        border-b
        border-pink-100
        bg-[#ffddf0]
        backdrop-blur-xl
        transition-colors
        dark:border-white/10
        dark:bg-[#371c59]
        md:block
      "
    >
      <Vine />

      <nav
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          px-6
          py-4
        "
      >
        <a
          href="#home"
          className="group relative flex items-center px-2 py-1"
          aria-label="Home"
        >
          <span
            className="
      font-serif
      text-2xl
      font-medium
      tracking-wide
      text-[#4d3a4d]
      dark:text-purple-100
    "
          >
            Anna
          </span>

          {/* Small sparkle */}
          <Sparkle
            aria-hidden="true"
            className="
      absolute
      -right-1
      top-0
      h-2.5
      w-2.5
      text-pink-400/70
      transition-transform
      duration-300
      group-hover:rotate-12
      group-hover:scale-125
      dark:text-fuchsia-300/70
    "
          />

          {/* Subtle curved flourish */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 12"
            fill="none"
            className="
      absolute
      -bottom-1
      left-1/2
      h-3
      w-[95%]
      -translate-x-1/2
      overflow-visible
      text-pink-400/45
      dark:text-fuchsia-300/40
    "
          >
            <path
              d="M5 7 C24 2 38 10 52 6 C67 2 79 8 95 4"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
        {/* Navigation */}
        <div className="flex items-center gap-4 text-sm">
          {navigation.map((item, index) => (
            <div key={item.name} className="group flex items-center gap-4">
              <a
                href={item.href}
                className="
          relative
          rounded-full
          border
          border-transparent
          px-3
          py-1.5
          text-[#4d3a4d]

          transition-all
          duration-300
          ease-out

          hover:-translate-y-px
          hover:bg-pink-100/70
          hover:text-pink-600

          focus-visible:-translate-y-px
          focus-visible:border-pink-300/50
          focus-visible:bg-pink-100/45
          focus-visible:text-pink-600
          focus-visible:outline-none

          dark:text-purple-200
          dark:hover:bg-purple-300/5
          dark:hover:text-fuchsia-100

          dark:focus-visible:border-fuchsia-300/25
          dark:focus-visible:bg-purple-300/10
          dark:focus-visible:text-fuchsia-100
        "
              >
                {item.name}
              </a>

              {index < navigation.length - 1 && (
                <Sparkle
                  className="
            h-2.5
            w-2.5
            text-pink-400/70

            transition-transform
            duration-300
            ease-out

            group-hover:rotate-12
            group-hover:scale-125

            dark:text-fuchsia-300/70
          "
                />
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Music */}
          <div className="relative">
            {isMusicPlaying && (
              <div
                aria-hidden="true"
                className="
      pointer-events-none
      absolute
      left-2
      top-1
      z-20
      h-8
      w-8
      overflow-visible
    "
              >
                <span className="music-sparkle music-sparkle-1">✦</span>
                <span className="music-sparkle music-sparkle-2">✧</span>
                <span className="music-sparkle music-sparkle-3">✦</span>
                <span className="music-sparkle music-sparkle-4">✧</span>
              </div>
            )}

            <OrnamentalButton
              ariaLabel={
                isMusicPlaying
                  ? "Pause background music"
                  : "Play background music"
              }
              pressed={isMusicPlaying}
              onClick={onToggleMusic}
              label={isMusicPlaying ? "Pause" : "Music"}
            >
              <MusicNotesIcon
                size={17}
                weight={isMusicPlaying ? "fill" : "regular"}
              />
            </OrnamentalButton>
          </div>

          {/* Theme */}
          <OrnamentalButton
            ariaLabel={
              resolvedTheme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            onClick={toggleTheme}
            label={
              <>
                <span className="dark:hidden">Dark</span>

                <span className="hidden dark:inline">Light</span>
              </>
            }
          >
            <span className="dark:hidden">
              <StarAndCrescentIcon size={17} />
            </span>

            <span className="hidden dark:inline">
              <SunDimIcon size={17} />
            </span>
          </OrnamentalButton>
        </div>
      </nav>
    </div>
  );
}
