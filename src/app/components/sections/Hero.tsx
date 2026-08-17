import { GithubIcon, LinkedInIcon } from "../icons";
import Sparkle from "../Sparkle";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32"
    >
      <div className="max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/60 px-4 py-2 text-sm text-pink-700 dark:border-purple-700/50 dark:bg-purple-950/40 dark:text-purple-200">
          <Sparkle className="h-3 w-3" />
          Software Developer
        </div>

        <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl text-[#492f3e] dark:text-[#fde9ff]">
          Hello there, I'm{" "}
          <span className="text-[#df64b3] italic dark:text-fuchsia-300">
            Anna
          </span>
        </h1>

        <h2 className="mt-5 max-w-3xl text-2xl font-light leading-relaxed text-[#795c76] sm:text-3xl dark:text-purple-200">
          I love building accessible, polished, and genuinely useful web applications
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-8 text-[#806b7d] sm:text-lg dark:text-purple-300/80">
          Computer science student and full-stack developer interested in
          building accessible, polished, and genuinely useful web
          applications.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#e991b6] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#dd7eaa] dark:bg-purple-200 dark:text-purple-950 dark:hover:bg-fuchsia-200"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-pink-200 bg-white/60 px-6 py-3 text-sm font-semibold text-[#684c65] transition-all hover:-translate-y-0.5 hover:bg-pink-50 dark:border-purple-700 dark:bg-purple-950/30 dark:text-purple-100 dark:hover:bg-purple-900/50"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-[#98768f] dark:text-purple-300">
          <a
            href="#"
            aria-label="GitHub"
            className="transition hover:scale-110"
          >
            <GithubIcon />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="transition hover:scale-110"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
}