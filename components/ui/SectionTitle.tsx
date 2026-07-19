interface SectionTitleProps {
  /** Monospace eyebrow, written as a table name to match the data theme. */
  readonly table: string;
  readonly title: string;
  readonly description?: string;
  readonly id: string;
}

export function SectionTitle({ table, title, description, id }: SectionTitleProps) {
  return (
    <header className="mb-14 max-w-2xl md:mb-20">
      <p className="eyebrow reveal mb-4" data-reveal>
        {`-- ${table}`}
      </p>
      <h2
        id={id}
        className="reveal text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl"
        data-reveal
      >
        {title}
      </h2>
      {description ? (
        <p className="reveal mt-6 text-lg leading-relaxed text-muted" data-reveal>
          {description}
        </p>
      ) : null}
      <div className="hairline reveal mt-10" data-reveal />
    </header>
  );
}
