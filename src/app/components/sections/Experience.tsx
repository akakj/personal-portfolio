import { education, experience } from "@/app/data/info";

import SectionHeading from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

import {
  DesktopGlows,
  FairyPill,
  MobileCardGlow,
  Subheading,
  VineDivider,
} from "../ui//ExperienceDecorations";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <SectionHeading
        number="04"
        title="Experience & Education"
      />

      <div
        className="
          relative mt-10

          md:overflow-hidden
          md:rounded-4xl
          md:border
          md:border-pink-200/80
          md:bg-white/45
          md:p-8
          md:shadow-[0_8px_32px_rgba(212,116,162,0.06)]
          md:backdrop-blur-sm

          lg:p-10

          md:dark:border-purple-700/40
          md:dark:bg-[#160b22]/60
          md:dark:shadow-[inset_0_0_70px_rgba(126,34,206,0.025)]
        "
      >
        <DesktopGlows />

        <div
          className="
            relative
            grid gap-8

            md:grid-cols-2
            md:gap-0
          "
        >
          {/* Education */}
          <Reveal
            preset="left"
            className="
              relative
              overflow-hidden
              rounded-4xl

              border border-pink-200/80
              bg-white/45
              p-6

              shadow-[0_8px_28px_rgba(212,116,162,0.05)]
              backdrop-blur-sm

              dark:border-purple-700/40
              dark:bg-[#160b22]/60

              md:overflow-visible
              md:rounded-none
              md:border-0
              md:bg-transparent
              md:p-0
              md:pr-10
              md:shadow-none
              md:backdrop-blur-none

              md:dark:border-0
              md:dark:bg-transparent

              lg:pr-12
            "
          >
            <MobileCardGlow />

            <div className="relative">
              <Subheading>Education</Subheading>

              {education.map((item) => (
                <article
                  key={`${item.course}-${item.institution}`}
                  className="font-sans"
                >
                  <p
                    className="
                      mb-3 text-sm
                      text-[#755f72]
                      dark:text-purple-400
                    "
                  >
                    {item.date}
                  </p>

                  <h4
                    className="
                      text-base font-semibold
                      text-[#43283c]
                      dark:text-purple-50
                    "
                  >
                    {item.course}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[#a93670]
                      dark:text-fuchsia-300
                    "
                  >
                    @ {item.institution}
                  </p>

                  <p
                    className="
                      mt-4 leading-7
                      text-[#755f72]
                      dark:text-purple-200/70
                    "
                  >
                    {item.description}
                  </p>

                  <div className="mt-7">
                    <p
                      className="
                        mb-3 font-semibold
                        text-[#5e4859]
                        dark:text-purple-200
                      "
                    >
                      Relevant study
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.relevantStudy.map((subject) => (
                        <FairyPill key={subject}>
                          {subject}
                        </FairyPill>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p
                      className="
                        mb-3 font-semibold
                        text-[#5e4859]
                        dark:text-purple-200
                      "
                    >
                      Prize
                    </p>

                    <div
                      className="
                        relative overflow-hidden
                        rounded-2xl

                        border border-pink-200/70
                        bg-pink-50/35

                        px-4 py-4

                        shadow-[inset_0_0_30px_rgba(244,114,182,0.025)]

                        dark:border-fuchsia-500/25
                        dark:bg-fuchsia-950/15
                        dark:shadow-[inset_0_0_30px_rgba(217,70,239,0.04)]
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          absolute right-4 top-3
                          text-[10px]
                          text-pink-400/70

                          dark:text-fuchsia-300/60
                        "
                      >
                        ✦
                      </span>

                      <p
                        className="
                          relative pr-6
                          font-medium
                          text-[#a93670]

                          dark:text-fuchsia-300
                        "
                      >
                        {item.prize.title} · {item.prize.date}
                      </p>

                      <p
                        className="
                          relative mt-2
                          leading-7
                          text-[#755f72]

                          dark:text-purple-200/70
                        "
                      >
                        {item.prize.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <VineDivider />

          {/* Experience */}
          <Reveal
            preset="right"
            className="
              relative
              overflow-hidden
              rounded-4xl

              border border-pink-200/80
              bg-white/45
              p-6

              shadow-[0_8px_28px_rgba(212,116,162,0.05)]
              backdrop-blur-sm

              dark:border-purple-700/40
              dark:bg-[#160b22]/60

              md:overflow-visible
              md:rounded-none
              md:border-0
              md:bg-transparent
              md:p-0
              md:pl-10
              md:shadow-none
              md:backdrop-blur-none

              md:dark:border-0
              md:dark:bg-transparent

              lg:pl-12
            "
          >
            <MobileCardGlow />

            <div className="relative">
              <Subheading>Experience</Subheading>

              {experience.map((item) => (
                <article key={`${item.role}-${item.company}`}>
                  <p
                    className="
                      mb-3 text-sm
                      text-[#755f72]
                      dark:text-purple-400
                    "
                  >
                    {item.date}
                  </p>

                  <h4
                    className="
                      text-base font-semibold
                      text-[#43283c]
                      dark:text-purple-50
                    "
                  >
                    {item.role}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[#a93670]
                      dark:text-fuchsia-300
                    "
                  >
                    @ {item.company}
                  </p>

                  <div className="mt-7">
                    <p
                      className="
                        mb-3 font-semibold
                        text-[#5e4859]
                        dark:text-purple-200
                      "
                    >
                      Courses taught
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course) => (
                        <FairyPill key={course}>
                          {course}
                        </FairyPill>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p
                      className="
                        mb-4 font-semibold
                        text-[#5e4859]
                        dark:text-purple-200
                      "
                    >
                      Role
                    </p>

                    <ul
                      className="
                        space-y-4 leading-7
                        text-[#755f72]
                        dark:text-purple-200/70
                      "
                    >
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3"
                        >
                          <span
                            aria-hidden="true"
                            className="
                              mt-[0.7rem]
                              h-1.5 w-1.5
                              shrink-0
                              rounded-full

                              bg-pink-400

                              shadow-[0_0_7px_rgba(244,114,182,0.45)]

                              dark:bg-fuchsia-300
                              dark:shadow-[0_0_8px_rgba(232,121,249,0.35)]
                            "
                          />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}