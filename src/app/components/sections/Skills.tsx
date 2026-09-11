import {
  categoryStyles,
  fallbackStyle,
  skills,
} from "@/app/data/info";
import SectionHeading from "../ui/SectionHeading";
import { Stagger } from "../ui/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative mx-auto max-w-6xl
        overflow-hidden
        px-6 py-28
      "
    >
      <SectionHeading number="02" title="Skills & tools" />

      <div className="relative">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -left-16 top-10
            h-48 w-48 rounded-full
            bg-pink-300/10 blur-3xl

            sm:hidden

            dark:bg-fuchsia-500/5
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-20 bottom-20
            h-52 w-52 rounded-full
            bg-purple-300/10 blur-3xl

            sm:hidden

            dark:bg-purple-500/5
          "
        />


        <Stagger
          className="
            relative z-10
            space-y-7

            max-sm:ml-5
          "
        >
          {Object.entries(skills).map(
            ([category, categorySkills], index) => {
              const style =
                categoryStyles[
                  category as keyof typeof categoryStyles
                ] ?? fallbackStyle;

              return (
                <div
                  key={category}
                  className={`
                    group relative
                    overflow-hidden
                    rounded-4xl
                    border
                    p-5
                    backdrop-blur-[2px]
                    transition-all duration-300

                    shadow-[inset_0_0_38px_rgba(244,114,182,0.025)]

                    sm:rounded-3xl
                    sm:p-6
                    sm:backdrop-blur-none
                    sm:shadow-none

                    dark:shadow-[inset_0_0_38px_rgba(217,70,239,0.02)]

                    ${style.container}
                  `}
                >
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute -right-10 -top-12
                      h-32 w-32 rounded-full
                      bg-white/25 blur-3xl

                      sm:hidden

                      dark:bg-purple-300/2.5
                    "
                  />

                  <h3
                    className={`
                      relative
                      mb-5
                      flex items-center gap-2
                      text-lg font-semibold
                      ${style.heading}
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className={`
                        text-[11px]
                        opacity-80

                        sm:text-sm
                        sm:opacity-100

                        ${style.sparkle}
                      `}
                    >
                      {style.symbol}
                    </span>

                    {category}
                  </h3>

                  <div
                    className="
                      relative
                      flex flex-wrap
                      gap-2.5

                      sm:gap-3
                    "
                  >
                    {categorySkills.map((skill) => (
                      <div
                        key={skill}
                        className={`
                          rounded-full
                          border

                          px-4 py-2.5
                          text-sm
                          text-[#684f65]

                          shadow-[0_2px_10px_rgba(80,50,90,0.025)]

                          transition-all duration-300

                          sm:px-5
                          sm:py-3
                          sm:shadow-none

                          sm:hover:-translate-y-1

                          dark:text-purple-100

                          ${style.pill}
                          ${style.shadow}
                        `}
                      >
                        <span
                          aria-hidden="true"
                          className={`
                            mr-2 hidden
                            text-xs

                            sm:inline

                            ${style.sparkle}
                          `}
                        >
                          {style.symbol}
                        </span>

                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </Stagger>
      </div>
    </section>
  );
}