import { Check, X } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const MARKETPLACE = [
  "Mise en relation transactionnelle",
  "L'expert reste seul face à sa croissance",
  "Aucun soutien marketing ou opérationnel",
  "Aucune technologie propriétaire",
] as const;

const OLONA = [
  "Cabinet international de développement",
  "Marque, technologie et équipe dédiées",
  "Marketing, acquisition et support intégrés",
  "Écosystème structuré, présence internationale",
] as const;

export function DifferentiatorSection() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionEyebrow>La différence</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
            Un cabinet,
            <span className="text-gold-500"> pas une marketplace.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            Les plateformes traditionnelles mettent en relation un client et un
            expert. Olona devient un véritable partenaire de développement pour
            l'expert.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <ComparisonCard
            label="Plateforme traditionnelle"
            items={MARKETPLACE}
            variant="muted"
          />
          <ComparisonCard
            label="Olona Sport Experts"
            items={OLONA}
            variant="accent"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="font-display text-lg font-semibold leading-snug text-surface-50 md:text-xl">
            Nous ne vendons pas une mise en relation.
            <br className="hidden sm:block" />
            <span className="text-gold-400">
              {" "}
              Nous proposons un écosystème de croissance.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({
  label,
  items,
  variant,
}: {
  label: string;
  items: readonly string[];
  variant: "muted" | "accent";
}) {
  const isAccent = variant === "accent";
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 ${
        isAccent
          ? "border-gold-500/25 bg-gradient-to-b from-gold-500/[0.05] to-transparent"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {isAccent && (
        <div
          className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
          aria-hidden
        />
      )}
      <div
        className={`text-[11px] uppercase tracking-[0.25em] ${
          isAccent ? "text-gold-500" : "text-surface-200"
        }`}
      >
        {label}
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                isAccent
                  ? "border-gold-500/30 bg-gold-500/10 text-gold-400"
                  : "border-white/10 bg-white/[0.02] text-surface-200/70"
              }`}
            >
              {isAccent ? (
                <Check className="h-3 w-3" strokeWidth={3} />
              ) : (
                <X className="h-3 w-3" strokeWidth={3} />
              )}
            </span>
            <span
              className={`text-sm leading-relaxed md:text-base ${
                isAccent ? "text-surface-50" : "text-surface-200"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
