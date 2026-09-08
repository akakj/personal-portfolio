import Sparkle from "../ui/Sparkle";

export default function Footer() {
  return (
    <footer className="border-t border-pink-200 dark:border-purple-900/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-5 px-6 py-8 text-sm text-[#755f72] sm:grid-cols-[1fr_auto_1fr] dark:text-purple-400">
        <p className="text-center sm:justify-self-start sm:text-left">
          © 2026 Anna Kandyba
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-self-center">
          <span className="whitespace-nowrap">
            Designed & built by Anna with
          </span>

          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <Sparkle className="h-3 w-3 shrink-0 text-pink-400 dark:text-fuchsia-300" />

            <span>a little fairy dust</span>

            <Sparkle className="h-3 w-3 shrink-0 text-pink-400 dark:text-fuchsia-300" />
          </span>
        </div>
      </div>
    </footer>
  );
}