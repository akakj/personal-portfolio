import { projects } from "@/app/data/info";
import SectionHeading from "../SectionHeading";
import Sparkle from "../Sparkle";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="03" title="Selected projects" />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative flex min-h-97.5 flex-col overflow-hidden rounded-4xl border border-pink-200 bg-white/65 p-7 shadow-sm shadow-pink-100 transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 dark:border-purple-700/40 dark:bg-[#160b22]/70 dark:shadow-none dark:hover:border-fuchsia-500/40"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-pink-200/50 blur-3xl dark:bg-fuchsia-700/10" />

            <div className="relative">
              <div className="mb-12 flex items-center justify-between">
                <span className="font-serif text-4xl text-pink-200 italic dark:text-purple-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Sparkle className="h-4 w-4 text-pink-400 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125 dark:text-fuchsia-300" />
              </div>

              <h3 className="font-serif text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#806b7d] dark:text-purple-200/70">
                {project.description}
              </p>
            </div>

            <div className="relative mt-auto pt-8">
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-700 dark:bg-purple-900/60 dark:text-purple-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 text-sm font-medium">
                <a
                  href={project.live}
                  className="text-pink-600 transition-opacity hover:opacity-60 dark:text-fuchsia-300"
                >
                  Live site ↗
                </a>

                <a
                  href={project.github}
                  className="transition-opacity hover:opacity-60"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#"
          className="text-sm font-medium text-pink-600 underline decoration-1 underline-offset-8 dark:text-purple-300"
        >
          View all projects
        </a>
      </div>
    </section>
  );
}
