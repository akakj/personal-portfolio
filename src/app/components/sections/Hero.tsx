import Sparkle from "../ui/Sparkle";
import FairyButton from "../ui/FairyButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32"
    >
      <div className="max-w-4xl">
        <div
          className="
            relative mb-6 inline-flex items-center rounded-full
            border border-pink-300 bg-[#fcf7fc] px-5 py-2
            text-sm text-pink-700
            dark:border-purple-700/50 dark:bg-purple-950/40 dark:text-purple-200
          "
        >
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute -left-1 -top-1
              text-pink-400 dark:text-fuchsia-300
            "
          >
            <Sparkle className="h-4 w-4" />
          </span>

          <span className="font-medium">Full-Stack Developer</span>
        </div>

        <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-[#492f3e] dark:text-[#fde9ff] sm:text-6xl lg:text-8xl">
          Hello there, I&apos;m{" "}
          <span className="italic text-[#b1236c] dark:text-fuchsia-300">
            Anna
          </span>
        </h1>

        <h2 className="mt-5 max-w-3xl text-2xl font-light leading-relaxed text-[#795c76] dark:text-purple-200 sm:text-3xl">
          Computer science student and full-stack developer who loves building
          accessible, polished, and genuinely useful web applications.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-6">
          <FairyButton href="#projects">View my work</FairyButton>

          <FairyButton href="#contact" variant="secondary">
            Get in touch
          </FairyButton>
        </div>
      </div>
    </section>
  );
}