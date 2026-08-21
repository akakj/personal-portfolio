import { education, experience } from "@/app/data/info";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="04" title="Experience & Education" />

      <div className="relative mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Vertical divider between Education and Experience */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-pink-200 md:block dark:bg-purple-800/50"
        />
        {/* Education — left */}
        <div>
          <h3 className="mb-4 font-sans text-2xl font-semibold text-pink-500 dark:text-fuchsia-300">
            Education
          </h3>

          <div className="border-t border-pink-200 dark:border-purple-800/50">
            {education.map((item) => (
              <article
                key={`${item.course}-${item.institution}`}
                className="py-7 font-sans"
              >
                <p className="mb-3 text-sm text-[#72616f] dark:text-purple-400">
                  {item.date}
                </p>

                <h4 className="text-md font-semibold">{item.course}</h4>

                <p className="mt-1 text-pink-500 dark:text-fuchsia-300">
                  @ {item.institution}
                </p>

                <p className="mt-3 leading-7 text-[#72616f] dark:text-purple-200/70">
                  {item.description}
                </p>

                <div className="mt-6">
                  <p className="mb-2 font-semibold text-[#72616f] dark:text-purple-200">
                    Relevant study
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.relevantStudy.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-pink-300 px-3 py-1 text-sm text-[#72616f] bg-[#fee3f258] dark:border-purple-800/70 dark:text-purple-200/70 dark:bg-[#371c5990]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-2 font-semibold text-[#72616f] dark:text-purple-200">
                    Prize
                  </p>

                  <p className="text-pink-500 dark:text-fuchsia-300">
                    {item.prize.title} · {item.prize.date}
                  </p>

                  <p className="mt-2 leading-7 text-[#72616f] dark:text-purple-200/70">
                    {item.prize.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Experience — right */}
        <div>
          <h3 className="mb-4 font-sans text-2xl font-semibold text-pink-500 dark:text-fuchsia-300">
            Experience
          </h3>

          <div className="border-t border-pink-200 dark:border-purple-800/50">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="py-7">
                <p className="mb-3 text-sm text-[#72616f] dark:text-purple-400">
                  {item.date}
                </p>

                <h4 className="text-md font-semibold">{item.role}</h4>

                <p className="mt-1 text-pink-500 dark:text-fuchsia-300">
                  @ {item.company}
                </p>

                <div className="mt-6">
                  <p className="mb-2 font-semibold text-[#72616f] dark:text-purple-200">
                    Courses taught
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-pink-300 px-3 py-1 text-sm text-[#72616f] bg-[#fee3f258] dark:border-purple-800/70 dark:text-purple-200/70 dark:bg-[#371c5990]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 font-semibold text-[#72616f] dark:text-purple-200">
                    Role
                  </p>

                  <ul className="space-y-3 leading-7 text-[#72616f] dark:text-purple-200/70">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400 dark:bg-fuchsia-300"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
