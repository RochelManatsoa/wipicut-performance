import type { ReactNode } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-premium-gradient" aria-hidden />
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-30"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 md:pb-20 md:pt-28">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
