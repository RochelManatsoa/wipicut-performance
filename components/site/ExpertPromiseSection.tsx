import { Check } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CTAButton } from "@/components/ui/CTAButton";

const KEEPS = [
  "Vous fixez librement vos tarifs",
  "Vous choisissez les prestations que vous proposez",
  "Vous gardez votre indépendance",
  "Vous conservez vos méthodes et votre image",
] as const;

const PROVIDES = [
  "Nous trouvons les clients",
  "Nous gérons le marketing et la visibilité",
  "Nous préparons les analyses vidéo avec Wipicut",
  "Nous assurons paiements, facturation et support",
] as const;

export function ExpertPromiseSection() {
  return (
    <section className="relative border-t border-white/5 bg-gradient-to-b from-ink-900/40 to-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionEyebrow>Promesse aux experts</SectionEyebrow>
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
            Vous apportez votre expertise.
            <br />
            <span className="text-gold-500">
              Nous développons votre activité.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            Vous êtes reconnu pour votre expertise. Nous sommes là pour
            développer votre activité — sans vous demander de changer votre
            façon de travailler.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <PromiseCard
            eyebrow="Ce que vous gardez"
            items={KEEPS}
          />
          <PromiseCard
            eyebrow="Ce qu'Olona apporte"
            items={PROVIDES}
            accent
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold-500/25 bg-gradient-to-b from-gold-500/[0.05] to-transparent p-6 text-center md:p-8">
          <p className="font-display text-lg font-semibold leading-snug text-surface-50 md:text-xl">
            Vous vous concentrez sur ce que vous faites de mieux&nbsp;:
            <span className="text-gold-400"> accompagner les sportifs.</span>
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton
            href="/devenir-expert-fondateur"
            variant="primary"
            size="lg"
          >
            Devenir Expert Fondateur
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function PromiseCard({
  eyebrow,
  items,
  accent = false,
}: {
  eyebrow: string;
  items: readonly string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 ${
        accent
          ? "border-gold-500/25 bg-gradient-to-b from-gold-500/[0.05] to-transparent"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {accent && (
        <div
          className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
          aria-hidden
        />
      )}
      <div className="text-[11px] uppercase tracking-[0.25em] text-gold-500">
        {eyebrow}
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-sm leading-relaxed text-surface-50 md:text-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
