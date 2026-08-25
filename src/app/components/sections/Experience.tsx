import { education, experience } from "@/app/data/info";
import SectionHeading from "../ui/SectionHeading";
import Sparkle from "../ui/Sparkle";
import { Reveal } from "../ui/Reveal";

function FairyPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        group
        relative
        inline-flex
        overflow-hidden
        rounded-full

        border border-pink-300/80
        bg-pink-50/55
        px-3 py-1

        text-sm
        text-[#6f596a]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-0.5
        hover:border-pink-400/80
        hover:bg-pink-50/90
        hover:text-[#9f376e]
        hover:shadow-[0_4px_16px_rgba(236,72,153,0.14)]

        dark:border-purple-800/70
        dark:bg-[#371c5990]
        dark:text-purple-200/70

        dark:hover:border-fuchsia-400/45
        dark:hover:bg-[#422267]
        dark:hover:text-purple-100
        dark:hover:shadow-[0_4px_18px_rgba(217,70,239,0.14)]

        motion-reduce:transform-none
        motion-reduce:transition-none
      "
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -inset-2
          opacity-0
          blur-md

          bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.18),transparent_65%)]

          transition-opacity
          duration-300

          group-hover:opacity-100

          dark:bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.14),transparent_65%)]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 -left-8
          w-7
          rotate-12

          bg-linear-to-r
          from-transparent
          via-white/55
          to-transparent

          opacity-0

          transition-all
          duration-700
          ease-out

          group-hover:left-[110%]
          group-hover:opacity-70

          dark:via-fuchsia-100/15
        "
      />

      <span className="relative z-10">{children}</span>
    </span>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7 flex items-center gap-2.5">
      <Sparkle className="h-3.5 w-3.5 text-pink-400 dark:text-fuchsia-300" />

      <h3
        className="
          text-2xl
          font-semibold
          text-[#43283c]

          dark:text-purple-50
        "
      >
        {children}
      </h3>

      <span
        aria-hidden="true"
        className="
          ml-2 h-px flex-1
          bg-linear-to-r
          from-pink-200
          to-transparent

          dark:from-purple-700/60
        "
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="04" title="Experience & Education" />

      <div
        className="
          relative
          mt-10
          overflow-hidden
          rounded-4xl

          border border-pink-200/80
          bg-white/45

          p-6
          shadow-[0_8px_32px_rgba(212,116,162,0.06)]
          backdrop-blur-sm

          sm:p-8
          lg:p-10

          dark:border-purple-700/40
          dark:bg-[#160b22]/60
          dark:shadow-none
        "
      >
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -left-24 -top-28
            h-72 w-72
            rounded-full
            bg-pink-200/25
            blur-3xl

            dark:bg-fuchsia-700/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -bottom-28 -right-20
            h-72 w-72
            rounded-full
            bg-purple-200/20
            blur-3xl

            dark:bg-purple-700/10
          "
        />

        <div
          className="
            relative
            grid
            gap-14

            md:grid-cols-2
            md:gap-0
          "
        >
          {/* Education */}
          <Reveal preset="left" className="md:pr-10 lg:pr-12">
            <Subheading>Education</Subheading>

            {education.map((item) => (
              <article
                key={`${item.course}-${item.institution}`}
                className="font-sans"
              >
                <p className="mb-3 text-sm text-[#755f72] dark:text-purple-400">
                  {item.date}
                </p>

                <h4 className="text-base font-semibold text-[#43283c] dark:text-purple-50">
                  {item.course}
                </h4>

                <p className="mt-1 text-[#a93670] dark:text-fuchsia-300">
                  @ {item.institution}
                </p>

                <p className="mt-4 leading-7 text-[#755f72] dark:text-purple-200/70">
                  {item.description}
                </p>

                <div className="mt-7">
                  <p className="mb-3 font-semibold text-[#5e4859] dark:text-purple-200">
                    Relevant study
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.relevantStudy.map((subject) => (
                      <FairyPill key={subject}>{subject}</FairyPill>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="mb-3 font-semibold text-[#5e4859] dark:text-purple-200">
                    Prize
                  </p>

                  <div
                    className="
                      rounded-2xl
                      border border-pink-200/70
                      bg-pink-50/35
                      px-4 py-4

                      dark:border-purple-700/40
                      dark:bg-purple-900/20
                    "
                  >
                    <p className="font-medium text-[#a93670] dark:text-fuchsia-300">
                      {item.prize.title} · {item.prize.date}
                    </p>

                    <p className="mt-2 leading-7 text-[#755f72] dark:text-purple-200/70">
                      {item.prize.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>

          {/* Soft middle divider */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-2
              left-1/2
              top-2
              hidden
              w-px
              -translate-x-1/2

              bg-linear-to-b
              from-transparent
              via-pink-200
              to-transparent

              md:block

              dark:via-purple-700/50
            "
          />

          {/* Experience */}
          <Reveal preset="right" className="md:pl-10 lg:pl-12">
            <Subheading>Experience</Subheading>

            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`}>
                <p className="mb-3 text-sm text-[#755f72] dark:text-purple-400">
                  {item.date}
                </p>

                <h4 className="text-base font-semibold text-[#43283c] dark:text-purple-50">
                  {item.role}
                </h4>

                <p className="mt-1 text-[#a93670] dark:text-fuchsia-300">
                  @ {item.company}
                </p>

                <div className="mt-7">
                  <p className="mb-3 font-semibold text-[#5e4859] dark:text-purple-200">
                    Courses taught
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <FairyPill key={course}>{course}</FairyPill>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="mb-4 font-semibold text-[#5e4859] dark:text-purple-200">
                    Role
                  </p>

                  <ul className="space-y-4 leading-7 text-[#755f72] dark:text-purple-200/70">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
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
                          "
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}