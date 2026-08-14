import { education } from "@/app/data/info";
import SectionHeading from "../SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="05" title="Education" />

      {education.map((item) => (
        <div
          key={item.course}
          className="rounded-[2rem] border border-pink-200 bg-white/55 p-8 sm:p-10 dark:border-purple-700/40 dark:bg-purple-950/25"
        >
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                {item.course}
              </h3>

              <p className="mt-2 text-pink-500 dark:text-fuchsia-300">
                {item.institution}
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-[#7c6878] dark:text-purple-200/70">
                {item.description}
              </p>
            </div>

            <p className="shrink-0 text-sm text-[#a47d98] dark:text-purple-400">
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
