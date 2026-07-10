import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function TrustBlock({ icon: Icon, title, description }: Props) {
  return (
    <article className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7">
      <div
        className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        aria-hidden
      />
      <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-surface-50">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-surface-200">
        {description}
      </p>
    </article>
  );
}
