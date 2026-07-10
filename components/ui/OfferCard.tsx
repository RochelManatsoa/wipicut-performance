import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

export function OfferCard({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  highlighted = false,
}: Props) {
  return (
    <article
      className={clsx(
        "group relative flex flex-col rounded-2xl border p-7 transition-all",
        highlighted
          ? "border-gold-500/30 bg-gradient-to-b from-gold-500/[0.06] to-transparent hover:border-gold-500/50"
          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]",
      )}
    >
      {highlighted && (
        <div
          className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
          aria-hidden
        />
      )}
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-[0.25em] text-gold-500">
          {eyebrow}
        </span>
      )}
      <h3 className="mt-3 font-display text-2xl font-semibold text-surface-50">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-surface-200">
        {description}
      </p>
      <p className="mt-6 text-[11px] uppercase tracking-widest text-surface-200/70">
        Tarif selon expert et accompagnement choisi
      </p>
      <Link
        href={ctaHref}
        className="mt-4 inline-flex items-center justify-between gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-surface-50 transition-all hover:border-gold-500/60 hover:text-gold-400"
      >
        <span>{ctaLabel}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
