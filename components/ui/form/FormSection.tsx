import type { ReactNode } from "react";

type Props = {
  number: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function FormSection({ number, title, description, children }: Props) {
  return (
    <section className="border-t border-white/5 pt-10 first:border-t-0 first:pt-0">
      <header className="mb-6">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] tracking-[0.25em] text-gold-500">
            {number}
          </span>
          <h2 className="font-display text-xl font-semibold text-surface-50">
            {title}
          </h2>
        </div>
        {description && (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-surface-200">
            {description}
          </p>
        )}
      </header>
      <div className="space-y-5">{children}</div>
    </section>
  );
}
