interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
          {label}
        </p>
      )}
      <h2
        className={`${label ? "mt-3" : ""} text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">{description}</p>
      )}
    </div>
  );
}
