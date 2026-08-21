import SectionHeading from "../ui/SectionHeading";
import Sparkle from "../ui/Sparkle";
import ProjectGallery from "../ProjectGallery";
import ProjectDetails from "../ProjectDetails";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="03" title="My brewery" />

      <p className="-mt-8 text-sm italic text-[#9a7691] dark:text-purple-200/70 sm:text-base">
        Projects I&apos;ve brewed, built, and brought to life
      </p>

      <article className="relative mt-6 overflow-hidden rounded-4xl border border-pink-200 bg-white/60 p-4 shadow-sm shadow-pink-100 backdrop-blur-sm sm:p-6 lg:p-8 dark:border-purple-700/40 dark:bg-[#160b22]/65 dark:shadow-none">
        {/* Decorative glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl dark:bg-fuchsia-700/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-purple-200/25 blur-3xl dark:bg-purple-700/10"
        />

        {/* Project heading */}
        <header className="relative mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Sparkle className="h-4 w-4 text-pink-400 dark:text-fuchsia-300" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink-600 dark:text-fuchsia-300">
                Featured project
              </span>
            </div>

            <h3 className="text-4xl font-semibold">Codey</h3>

            <p className="mt-2 text-lg italic text-[#9a7691] dark:text-purple-200/70">
              Build. Run. Analyse.
            </p>
          </div>
        </header>

        <ProjectGallery />

        <ProjectDetails />
      </article>
    </section>
  );
}