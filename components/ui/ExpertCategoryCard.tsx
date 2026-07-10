import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ExpertCategoryCard({ icon: Icon, title, description }: Props) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-gold-500/30 hover:bg-white/[0.03]">
      <div className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-ink-900 text-gold-500 transition-colors group-hover:border-gold-500/40">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-surface-50">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-surface-200">
        {description}
      </p>
    </article>
  );
}
