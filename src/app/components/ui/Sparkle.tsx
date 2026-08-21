type SparkleProps = {
  className?: string;
};

export default function Sparkle({
  className = "",
}: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 1.75c.35 5.86 4.39 9.9 10.25 10.25C16.39 12.35 12.35 16.39 12 22.25 11.65 16.39 7.61 12.35 1.75 12 7.61 11.65 11.65 7.61 12 1.75Z" />
    </svg>
  );
}