import Sparkle from "../Sparkle";

export default function Footer() {
  return (
    <footer className="border-t border-pink-200 dark:border-purple-900/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-[#987d92] sm:flex-row dark:text-purple-400">
        <p>© 2026 Anna</p>

        <div className="flex items-center gap-2">
          <span>Designed & built with</span>

          <Sparkle className="h-3 w-3 text-pink-400 dark:text-fuchsia-300" />

          <span>a little fairy dust.</span>
        </div>

        <div className="flex gap-5">
          <a href="#" className="transition hover:opacity-60">
            GitHub
          </a>

          <a href="#" className="transition hover:opacity-60">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
