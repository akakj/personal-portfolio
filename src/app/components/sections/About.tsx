import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="01" title="About me" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5 text-lg leading-8 text-[#755f72] dark:text-purple-200/80">
          <p>
            I&apos;m a full-stack developer who enjoys turning ideas into
            practical and polished digital products. My interests span frontend
            development, backend systems, databases, APIs, and user experience.
          </p>

          <p>
            I particularly enjoy projects where technical problem-solving and
            design meet: creating interfaces that feel intuitive while making
            sure the systems behind them are reliable and maintainable.
          </p>

          <p>
            Outside of development, I like to learn more stuff about building
          </p>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-pink-200 bg-white/55 p-8 dark:border-purple-700/40 dark:bg-purple-950/30">
          <span
            aria-hidden="true"
            className="absolute right-6 top-5 text-xl text-pink-400 dark:text-fuchsia-300"
          >
            ✦
          </span>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b12f73] dark:text-fuchsia-300">
            Currently
          </p>

          <div className="mt-7 space-y-6">
            <InfoRow label="Based in" value="United Kingdom" />

            <InfoRow label="Studying" value="Computer Science" />

            <InfoRow label="Focus" value="Full-stack web development" />

            <InfoRow label="Open to" value="Graduate & internship roles" />
          </div>
        </div>
      </div>
    </section>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-[#755f72] dark:text-purple-400">
        {label}
      </p>

      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}