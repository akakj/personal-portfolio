import SectionHeading from "../ui/SectionHeading";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    provider: "AWS",
    year: "2024",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    provider: "Azure",
    year: "2024",
  },
];

function CloudDecoration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-6 w-6" fill="none">
      <path
        d="M18 43h29a10 10 0 0 0 1-19.95A16 16 0 0 0 17.8 19.5 12 12 0 0 0 18 43Z"
        className="stroke-pink-400 dark:stroke-fuchsia-300"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerVine() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 90"
      fill="none"
      className="h-full w-full"
    >
      <path
        d="M112 84C83 72 93 41 63 42C39 43 37 19 10 9"
        className="stroke-pink-300/70 dark:stroke-purple-600/50"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M87 56C82 47 84 40 91 35C94 45 93 52 87 56Z"
        className="fill-pink-200/70 dark:fill-purple-700/40"
      />

      <path
        d="M62 42C54 36 52 29 55 21C64 28 67 35 62 42Z"
        className="fill-pink-200/70 dark:fill-purple-700/40"
      />

      <path
        d="M40 32C32 29 27 24 26 16C36 18 42 23 40 32Z"
        className="fill-pink-200/70 dark:fill-purple-700/40"
      />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="06" title="Certifications" />

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {certifications.map((certification) => (
          <article
            key={certification.name}
            className="
              group relative overflow-hidden
              rounded-4xl
              border border-pink-300
              bg-white/50
              px-8 py-8
              transition-all duration-300

              hover:-translate-y-1
              hover:border-pink-400
              hover:bg-white/60
              hover:shadow-[0_18px_45px_rgba(219,153,199,0.12)]

              dark:border-purple-700/60
              dark:bg-purple-950/30
              dark:hover:border-purple-600/60
              dark:hover:bg-purple-950/30
              dark:hover:shadow-[0_18px_45px_rgba(168,85,247,0.10)]
            "
          >
            {/* soft inner certificate border */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-1.75
                rounded-[1.65rem]
                border border-pink-100/80
                dark:border-purple-800/25
              "
            />

            {/* soft glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -right-10 -top-12
                h-36 w-36 rounded-full
                bg-pink-200/25 blur-3xl
                transition-transform duration-500
                group-hover:scale-125
                dark:bg-purple-500/10
              "
            />

            {/* botanical corner */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -bottom-2 -right-1
                h-24 w-32
                opacity-45
                transition-opacity duration-300
                group-hover:opacity-70
              "
            >
              <CornerVine />
            </div>

            {/* small floating sparkles */}
            <span
              aria-hidden="true"
              className="
                absolute right-8 top-7
                text-[10px]
                text-pink-300
                dark:text-purple-400
              "
            >
              ✦
            </span>

            <span
              aria-hidden="true"
              className="
                absolute right-14 top-11
                text-[6px]
                text-pink-300/70
                dark:text-purple-400/60
              "
            >
              ✦
            </span>

            <div className="relative z-10">
              {/* top information row */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      border border-pink-300
                      bg-pink-50/60
                      shadow-[0_3px_10px_rgba(219,153,199,0.08)]

                      dark:border-purple-700/50
                      dark:bg-purple-900/25
                    "
                  >
                    <CloudDecoration />
                  </div>

                  <span
                    className="
                      text-sm font-medium
                      tracking-wide
                      text-[#a47d98]
                      dark:text-purple-300
                    "
                  >
                    {certification.provider}
                  </span>
                </div>

                <span
                  className="
                    text-sm
                    text-[#a47d98]
                    dark:text-purple-400
                  "
                >
                  {certification.year}
                </span>
              </div>

              {/* certification details */}
              <div className="max-w-md">
                <h3
                  className="
                    text-xl font-semibold
                    leading-snug
                    text-[#36224f]
                    sm:text-2xl

                    dark:text-purple-100
                  "
                >
                  {certification.name}
                </h3>

                <p
                  className="
                    mt-3
                    text-pink-500
                    dark:text-fuchsia-300
                  "
                >
                  {certification.issuer}
                </p>
              </div>

              {/* ornamental divider */}
              <div className="mt-8 flex max-w-[85%] items-center gap-3">
                <div
                  className="
                    h-px flex-1
                    bg-linear-to-r
                    from-pink-200
                    via-pink-300/80
                    to-transparent

                    dark:from-purple-700/60
                    dark:via-purple-600/50
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    text-[8px]
                    text-pink-300
                    dark:text-purple-500
                  "
                >
                  ✦
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
