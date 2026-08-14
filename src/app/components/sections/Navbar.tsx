"use client";

import { useTheme } from "@teispace/next-themes";

import { navigation } from "@/app/data/info";
import Sparkle from "../Sparkle";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <header
      className="
        group fixed left-0 right-0 top-0 z-50
        border-b border-pink-100
        bg-[#fff8fc]/80
        backdrop-blur-xl
        transition-colors
        dark:border-white/10
        dark:bg-[#0d0715]/80
      "
    >

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <Sparkle className="h-5 w-5 text-pink-400 dark:text-fuchsia-300" />

          <span className="font-serif text-lg font-semibold tracking-wide">
            Your Name
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                text-[#72566f]
                transition-colors
                hover:text-pink-600
                dark:text-purple-200
                dark:hover:text-white
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="
            flex cursor-pointer items-center gap-2
            rounded-full
            border border-pink-200
            bg-white/70
            px-4 py-2
            text-sm font-medium
            text-pink-700
            transition-all
            hover:bg-pink-100
            dark:border-purple-700/70
            dark:bg-purple-950/60
            dark:text-purple-100
            dark:hover:bg-purple-900
          "
        >
          <span className="dark:hidden">☾</span>
          <span className="hidden dark:inline">✦</span>

          <span className="dark:hidden">Dark</span>
          <span className="hidden dark:inline">Light</span>
        </button>
      </nav>
    </header>
  );
}
