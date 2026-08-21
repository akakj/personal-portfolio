"use client";

import { ReactNode, useState } from "react";
import { useTheme } from "@teispace/next-themes";

import { navigation } from "@/app/data/info";
import Sparkle from "../ui/Sparkle";
import FlowerButton from "../ui/FlowerButton";

import { SunDimIcon } from "@phosphor-icons/react/dist/icons/SunDim";
import { StarAndCrescentIcon } from "@phosphor-icons/react/dist/icons/StarAndCrescent";
import { XIcon } from "@phosphor-icons/react/dist/icons/X";
import { ListHeartIcon } from "@phosphor-icons/react/dist/icons/ListHeart";
import { MusicNotesIcon } from "@phosphor-icons/react";

type MobileNavbarProps = {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
};

export default function MobileNavbar({
  isMusicPlaying,
  onToggleMusic,
}: MobileNavbarProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <div className="px-4 pt-4 md:hidden">
      <div className="relative mx-auto max-w-md">
        <svg
          aria-hidden="true"
          viewBox="0 0 420 80"
          fill="none"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            -left-3
            -top-2
            z-30
            h-19
            w-[calc(100%+1.5rem)]
            overflow-visible
            text-pink-400/80
            dark:text-purple-300/80
          "
        >
          {/* Left whimsical strokes */}
          <path
            d="M42 72C19 69 5 57 7 40C9 22 24 10 44 9"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
          />

          <path
            d="M27 66C12 62 4 53 5 43"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.7"
          />

          <path
            d="M44 9C36 3 27 4 21 10"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Right whimsical strokes */}
          <path
            d="M378 72C401 69 415 57 413 40C411 22 396 10 376 9"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
          />

          <path
            d="M393 66C408 62 416 53 415 43"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.7"
          />

          <path
            d="M376 9C384 3 393 4 399 10"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>

        <Sparkle
          className="
            pointer-events-none
            absolute
            -left-1
            top-3
            h-3
            w-3
            text-pink-400
            dark:text-fuchsia-300
          "
        />

        <Sparkle
          className="
            pointer-events-none
            absolute
            -right-1
            bottom-3
            h-2.5
            w-2.5
            text-pink-400
            dark:text-fuchsia-300
          "
        />

        <nav
          className="
            relative
            z-20
            flex
            h-15
            items-center
            justify-between
            rounded-[2.2rem]
            border
            border-pink-200/80
            bg-[#ffddf0]
            px-4
            shadow-[0_8px_30px_rgba(120,60,100,0.13)]
            backdrop-blur-xl
            transition-colors
            dark:border-purple-400/20
            dark:bg-[#371c59]/95
            dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          "
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              items-center
              gap-2
              rounded-full
              px-3
              py-2
              text-[#4d3a4d]
              transition-colors
              hover:bg-white/40
              dark:text-purple-100
              dark:hover:bg-white/10
            "
          >
            <Sparkle className="h-3 w-3 text-pink-500 dark:text-fuchsia-300" />

            <span className="font-serif text-xl font-medium tracking-wide">
              Anna
            </span>
          </a>

          <div className="flex items-center gap-1">
            {/* Music */}
            <div className="relative">
              {isMusicPlaying && (
                <div
                  aria-hidden="true"
                  className="
          pointer-events-none
          absolute
          inset-0
          z-20
          overflow-visible
        "
                >
                  <span className="music-sparkle music-sparkle-1">✦</span>

                  <span className="music-sparkle music-sparkle-2">✧</span>

                  <span className="music-sparkle music-sparkle-3">✦</span>
                </div>
              )}

              <FlowerButton
                aria-label={
                  isMusicPlaying
                    ? "Pause background music"
                    : "Play background music"
                }
                aria-pressed={isMusicPlaying}
                onClick={onToggleMusic}
              >
                <MusicNotesIcon
                  size={18}
                  weight={isMusicPlaying ? "fill" : "regular"}
                />
              </FlowerButton>
            </div>

            {/* Theme */}
            <FlowerButton aria-label="Toggle theme" onClick={toggleTheme}>
              <span className="dark:hidden">
                <StarAndCrescentIcon size={19} />
              </span>

              <span className="hidden dark:inline">
                <SunDimIcon size={19} />
              </span>
            </FlowerButton>

            {/* Menu */}
            <FlowerButton
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
              size="large"
            >
              {menuOpen ? <XIcon size={20} /> : <ListHeartIcon size={20} />}
            </FlowerButton>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={`
            absolute
            left-0
            right-0
            top-20
            z-10
            origin-top
            transition-all
            duration-300
            ${
              menuOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-[0.97] opacity-0"
            }
          `}
        >
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-pink-200/80
              bg-[#fff0f8]/95
              p-3
              shadow-[0_18px_45px_rgba(100,50,90,0.18)]
              backdrop-blur-xl
              dark:border-purple-400/20
              dark:bg-[#2b1547]/95
              dark:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
            "
          >
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-[1.25rem]
                    px-4
                    py-3
                    text-[#4d3a4d]
                    transition-all
                    hover:bg-pink-100/80
                    hover:pl-5
                    dark:text-purple-100
                    dark:hover:bg-purple-800/40
                  "
                >
                  <div className="flex items-center gap-3">
                    <Sparkle
                      className="
                        h-2.5
                        w-2.5
                        text-pink-400
                        transition-transform
                        group-hover:rotate-45
                        group-hover:scale-125
                        dark:text-fuchsia-300
                      "
                    />

                    <span className="text-sm">{item.name}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 py-2">
              <span className="h-px w-8 bg-pink-200 dark:bg-purple-700" />

              <Sparkle className="h-2.5 w-2.5 text-pink-400 dark:text-fuchsia-300" />

              <span className="h-px w-8 bg-pink-200 dark:bg-purple-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
