import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import {
  certificationStyles,
  certifications,
  CertificationProvider,
} from "@/app/data/info";
import { Stagger } from "../ui/Reveal";

function ProviderLogo({
  provider,
}: {
  provider: CertificationProvider;
}) {
  const isAWS = provider === "AWS";

  if (isAWS) {
    return (
      <span
        aria-hidden="true"
        className="
          h-6 w-9
          bg-[#996515]

          transition-all
          duration-300
          ease-out

          group-hover:scale-110

          dark:bg-amber-300
          dark:drop-shadow-[0_0_5px_rgba(252,211,77,0.25)]
        "
        style={{
          WebkitMaskImage: "url('/icons/aws.svg')",
          maskImage: "url('/icons/aws.svg')",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    );
  }

  return (
    <Image
      src="/icons/azure.svg"
      alt=""
      width={32}
      height={32}
      aria-hidden="true"
      className="
        h-7 w-7
        object-contain
        opacity-80

        transition-transform
        duration-300
        ease-out

        group-hover:scale-110
      "
    />
  );
}

function CornerVine({
  strokeClass,
  fillClass,
}: {
  strokeClass: string;
  fillClass: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 90"
      fill="none"
      className="h-full w-full"
    >
      <path
        d="M112 84C83 72 93 41 63 42C39 43 37 19 10 9"
        className={strokeClass}
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M87 56C82 47 84 40 91 35C94 45 93 52 87 56Z"
        className={fillClass}
      />

      <path
        d="M62 42C54 36 52 29 55 21C64 28 67 35 62 42Z"
        className={fillClass}
      />

      <path
        d="M40 32C32 29 27 24 26 16C36 18 42 23 40 32Z"
        className={fillClass}
      />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <SectionHeading number="06" title="Certifications" />

      <Stagger
        className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
        stagger={0.12}
      >
        {certifications.map((certification) => {
          const provider =
            certification.provider as CertificationProvider;

          const style = certificationStyles[provider];

          return (
            <article
              key={certification.name}
              className={`
                group relative h-full overflow-hidden
                rounded-4xl
                border
                px-8 py-8
                transition-all duration-300

                hover:-translate-y-1

                ${style.card}
              `}
            >
              {/* Inner fairy-frame border */}
              <div
                aria-hidden="true"
                className={`
                  pointer-events-none
                  absolute inset-1.75
                  rounded-[1.65rem]
                  border
                  ${style.innerBorder}
                `}
              />

              {/* Provider-coloured glow */}
              <div
                aria-hidden="true"
                className={`
                  pointer-events-none
                  absolute -right-10 -top-12
                  h-36 w-36
                  rounded-full
                  blur-3xl
                  transition-transform duration-500
                  group-hover:scale-125
                  ${style.glow}
                `}
              />

              {/* Decorative vine */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute -bottom-2 -right-1
                  h-24 w-32
                  opacity-50
                  transition-opacity duration-300
                  group-hover:opacity-75
                "
              >
                <CornerVine
                  strokeClass={style.vineStroke}
                  fillClass={style.vineFill}
                />
              </div>

              {/* Decorative sparkles */}
              <span
                aria-hidden="true"
                className={`
                  absolute right-8 top-7
                  text-[10px]
                  ${style.sparkle}
                `}
              >
                ✦
              </span>

              <span
                aria-hidden="true"
                className={`
                  absolute right-14 top-11
                  text-[6px]
                  ${style.sparkleMuted}
                `}
              >
                ✦
              </span>

              <div className="relative z-10">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Provider logo medallion */}
                    <div
                      className={`
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border

                        transition-all
                        duration-300
                        ease-out

                        group-hover:scale-105

                        ${style.iconWrapper}
                      `}
                    >
                      <ProviderLogo provider={provider} />
                    </div>

                    <span
                      className={`
                        text-sm font-medium
                        tracking-wide
                        ${style.meta}
                      `}
                    >
                      {certification.provider}
                    </span>
                  </div>

                  <span
                    className={`
                      text-sm
                      ${style.meta}
                    `}
                  >
                    {certification.year}
                  </span>
                </div>

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
                    className={`
                      mt-3
                      ${style.issuer}
                    `}
                  >
                    {certification.issuer}
                  </p>
                </div>

                {/* Provider-coloured divider */}
                <div className="mt-8 flex max-w-[85%] items-center gap-3">
                  <div
                    className={`
                      h-px flex-1
                      bg-linear-to-r
                      ${style.divider}
                    `}
                  />

                  <span
                    aria-hidden="true"
                    className={`
                      text-[8px]
                      ${style.sparkle}
                    `}
                  >
                    ✦
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </Stagger>
    </section>
  );
}