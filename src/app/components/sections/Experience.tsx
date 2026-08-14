import { experience } from "@/app/data/info";
import SectionHeading from "../SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="04" title="Experience" />

      <div>
        {experience.map((item) => (
          <div
            key={`${item.role}-${item.company}`}
            className="grid gap-4 border-t border-pink-200 py-8 md:grid-cols-[180px_1fr] dark:border-purple-800/50"
          >
            <p className="text-sm text-[#a57c99] dark:text-purple-400">
              {item.date}
            </p>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-serif text-xl font-semibold">
                  {item.role}
                </h3>

                <span className="text-pink-500 dark:text-fuchsia-300">
                  @ {item.company}
                </span>
              </div>

              <p className="mt-3 max-w-2xl leading-7 text-[#7e697b] dark:text-purple-200/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        <div className="border-t border-pink-200 dark:border-purple-800/50" />
      </div>
    </section>
  );
}
