import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SectionEyebrow({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-surface-200",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
      {children}
    </div>
  );
}
