import { skills } from "@/app/data/info";
import SectionHeading from "../SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="02" title="Skills & tools" />

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-pink-200 bg-white/60 px-5 py-3 text-sm text-[#684f65] transition-all hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50 dark:border-purple-700/50 dark:bg-purple-950/30 dark:text-purple-100 dark:hover:border-fuchsia-400/50 dark:hover:bg-purple-900/50"
          >
            <span className="mr-2 text-xs text-pink-400 dark:text-fuchsia-400">
              ✦
            </span>

            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
