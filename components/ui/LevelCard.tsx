type Props = {
  ageRange: string;
  title: string;
  description: string;
  focus: readonly string[];
};

export function LevelCard({ ageRange, title, description, focus }: Props) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="text-[11px] uppercase tracking-[0.25em] text-gold-500">
        {ageRange}
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold text-surface-50">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-surface-200">
        {description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {focus.map((f) => (
          <li
            key={f}
            className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11px] text-surface-200"
          >
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}
