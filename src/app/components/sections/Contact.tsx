import Sparkle from "../Sparkle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 pb-28 pt-32"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-pink-200 bg-linear-to-br from-white/80 to-pink-100/70 px-7 py-20 text-center sm:px-14 dark:border-purple-700/40 dark:from-purple-950/60 dark:to-fuchsia-950/20">
        <Sparkle className="absolute left-[12%] top-[20%] h-5 w-5 text-pink-400/60 dark:text-fuchsia-300/70" />

        <Sparkle className="absolute bottom-[20%] right-[14%] h-3 w-3 text-purple-300/70" />

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-pink-500 dark:text-fuchsia-300">
          A little magic begins with hello
        </p>

        <h2 className="font-serif text-4xl font-medium sm:text-5xl">
          Let&apos;s create something together.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-[#7c6678] dark:text-purple-200/70">
          I&apos;m always interested in new opportunities, interesting
          projects, and conversations about software development.
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-9 inline-flex rounded-full bg-[#e991b6] px-7 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:bg-[#dd7eaa] dark:bg-purple-200 dark:text-purple-950 dark:hover:bg-fuchsia-200"
        >
          Say hello ✦
        </a>
      </div>
    </section>
  );
}