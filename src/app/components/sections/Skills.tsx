import { skills } from "@/app/data/info";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="02" title="Skills & tools" />

      <div className="space-y-10">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="mb-4 text-lg font-semibold text-[#684f65] dark:text-purple-100">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-full border border-pink-300 bg-white/60 px-5 py-3 text-sm text-[#684f65] transition-all hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50 dark:border-purple-700/50 dark:bg-purple-950/30 dark:text-purple-100 dark:hover:border-fuchsia-400/50 dark:hover:bg-purple-900/50"
                >
                  <span className="mr-2 text-xs text-pink-400 dark:text-fuchsia-400">
                    ✦
                  </span>

                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
