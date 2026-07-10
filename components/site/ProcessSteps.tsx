import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const STEPS = [
  {
    n: "01",
    title: "Déposez votre profil",
    description:
      "Âge, poste, niveau, pays, club, objectifs et besoin principal.",
  },
  {
    n: "02",
    title: "Ajoutez une vidéo",
    description: "Transmettez une vidéo de match ou des séquences de jeu.",
  },
  {
    n: "03",
    title: "Olona Sport qualifie la demande",
    description:
      "Notre équipe identifie le besoin prioritaire et le type d'expert adapté.",
  },
  {
    n: "04",
    title: "Choisissez l'accompagnement",
    description: "Analyse vidéo, session expert ou pack complet.",
  },
  {
    n: "05",
    title: "Paiement sécurisé, mission cadrée",
    description:
      "La mission démarre uniquement après validation et paiement sécurisé.",
  },
] as const;

export function ProcessSteps() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionEyebrow>Comment ça marche</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
            Cinq étapes claires, un cadre sécurisé.
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-5">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="relative flex flex-col bg-ink-950 p-6"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] tracking-widest text-gold-500">
                  {step.n}
                </span>
                <span className="h-px flex-1 bg-white/10" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-surface-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-200">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
