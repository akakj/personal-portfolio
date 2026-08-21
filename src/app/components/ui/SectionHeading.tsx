type SectionHeadingProps = {
  number: string;
  title: string;
};

export default function SectionHeading({
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 flex items-center gap-4">
      <h2 className="font-serif text-3xl font-medium sm:text-5xl">
        {title}
      </h2>

      <div className="h-px flex-1 bg-pink-200 dark:bg-purple-800/60" />
    </div>
  );
}