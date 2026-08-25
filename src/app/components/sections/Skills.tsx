import { skills } from "@/app/data/info";
import SectionHeading from "../ui/SectionHeading";
import { fallbackStyle, categoryStyles } from "@/app/data/info";
import { Stagger } from "../ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="02" title="Skills & tools" />

      <Stagger className="space-y-7">
  {Object.entries(skills).map(([category, categorySkills]) => {
    const style =
      categoryStyles[category as keyof typeof categoryStyles] ??
      fallbackStyle;

          return (
            <div
              key={category}
              className={`rounded-3xl border p-5 transition-colors sm:p-6 ${style.container}`}
            >
              <h3
                className={`mb-5 flex items-center gap-2 text-lg font-semibold ${style.heading}`}
              >
                <span
                  aria-hidden="true"
                  className={`text-sm ${style.sparkle}`}
                >
                  {style.symbol}
                </span>

                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill}
                    className={`
                      rounded-full border px-5 py-3
                      text-sm text-[#684f65]
                      transition-all duration-300
                      hover:-translate-y-1
                      dark:text-purple-100
                      ${style.pill}
                      ${style.shadow}
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className={`mr-2 text-xs ${style.sparkle}`}
                    >
                      {style.symbol}
                    </span>

                    {skill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Stagger>
    </section>
  );
}