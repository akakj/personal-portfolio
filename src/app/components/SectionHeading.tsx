type SectionHeadingProps = {
  number: string;
  title: string;
};

export default function SectionHeading({
  number,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 flex items-center gap-4">
      <span className="text-xs font-semibold tracking-[0.25em] text-pink-500 dark:text-fuchsia-300">
        {number}
      </span>

      <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>

      <div className="h-px flex-1 bg-pink-200 dark:bg-purple-800/60" />
    </div>
  );
}