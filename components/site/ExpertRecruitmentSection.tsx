import { Check } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CTAButton } from "@/components/ui/CTAButton";

const KEEPS = [
  "Vos tarifs, fixés librement",
  "Vos disponibilités",
  "Vos missions acceptées ou refusées",
  "Votre méthode et votre marque personnelle",
] as const;

const HANDLES = [
  "Visibilité & demandes qualifiées",
  "Paiement sécurisé & facturation",
  "Relances & gestion administrative",
  "Dossiers vidéo Wipicut prêts à l'analyse",
] as const;

export function ExpertRecruitmentSection() {
  return (
    <section className="relative border-t border-white/5 bg-gradient-to-b from-transparent via-ink-900/40 to-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionEyebrow>Pour les experts football</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
              Développez votre expertise
              <br />
              <span className="text-gold-500">
                sans perdre votre indépendance.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-surface-200 md:text-lg">
              Chaque expert garde sa liberté, son image, ses tarifs et ses
              disponibilités. Olona Sport apporte l'infrastructure digitale, la
              visibilité, la qualification des demandes, la gestion des
              paiements, les relances, la facturation et les dossiers vidéo
              Wipicut.
            </p>

            <div className="mt-8">
              <CTAButton
                href="/devenir-expert-fondateur"
                variant="primary"
                size="lg"
              >
                Devenir Expert Fondateur
              </CTAButton>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-6 md:grid-cols-2">
            <ChecklistCard
              eyebrow="Vous gardez le contrôle"
              title="Votre indépendance, intacte."
              items={KEEPS}
            />
            <ChecklistCard
              eyebrow="Olona Sport gère le reste"
              title="Vous vous concentrez sur l'expertise."
              items={HANDLES}
              accent
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecklistCard({
  eyebrow,
  title,
  items,
  accent = false,
}: {
  eyebrow: string;
  title: string;
  items: readonly string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 ${
        accent
          ? "border-gold-500/25 bg-gradient-to-b from-gold-500/[0.05] to-transparent"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {accent && (
        <div
          className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
          aria-hidden
        />
      )}
      <div className="text-[11px] uppercase tracking-[0.25em] text-gold-500">
        {eyebrow}
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold text-surface-50">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-surface-50">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
