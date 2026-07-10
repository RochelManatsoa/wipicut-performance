import { ArrowRight, Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

const STEPS = [
  { label: "Profil déposé" },
  { label: "Vidéo analysée · Wipicut", meta: "03:24" },
  { label: "Expert identifié", meta: "Coach K." },
  { label: "Paiement sécurisé" },
  { label: "Mission cadrée" },
] as const;

const TRUST = [
  "Analyse vidéo",
  "Expertise humaine",
  "Paiement sécurisé",
  "Accompagnement structuré",
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-premium-gradient" aria-hidden />
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-40"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 pb-24 pt-20 md:pb-32 md:pt-28 lg:grid-cols-12 lg:gap-12">
        <div className="animate-fade-in-up lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-surface-200">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
            Cabinet international · Experts sportifs
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-surface-50 md:text-5xl lg:text-6xl">
            Le premier réseau international
            <br />
            <span className="text-gold-500">d'experts sportifs.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            Soutenu par une technologie propriétaire d'analyse vidéo et une
            équipe dédiée à la performance — au service des joueurs, des clubs,
            des académies et des experts qui les accompagnent.
          </p>

          <p className="mt-5 max-w-2xl font-display text-lg font-semibold leading-snug text-surface-50 md:text-xl">
            Vous apportez votre expertise.
            <span className="text-gold-500">
              {" "}
              Nous développons votre activité.
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton
              href="/deposer-profil"
              variant="primary"
              size="lg"
              icon={
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              }
            >
              Déposer un profil joueur
            </CTAButton>
            <CTAButton
              href="/devenir-expert-fondateur"
              variant="secondary"
              size="lg"
            >
              Devenir Expert Fondateur
            </CTAButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-surface-200">
            {TRUST.map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                {i > 0 && (
                  <span
                    className="h-1 w-1 rounded-full bg-white/25"
                    aria-hidden
                  />
                )}
                <span className="whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:120ms] lg:col-span-5">
          <div
            className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-500/10 via-transparent to-transparent blur-2xl"
            aria-hidden
          />

          <div className="absolute -left-3 top-8 z-10 -rotate-3 rounded-full border border-gold-500/30 bg-ink-950 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold-400 shadow-2xl">
            48 h · dossier
          </div>

          <article className="relative rounded-2xl border border-white/10 bg-ink-900/70 p-6 shadow-2xl backdrop-blur-sm">
            <div
              className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
              aria-hidden
            />

            <header className="flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.25em] text-surface-200">
                Dossier · OS-2891
              </div>
              <span className="rounded-full border border-gold-500/40 bg-gold-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-gold-400">
                Validé
              </span>
            </header>

            <div className="mt-6 flex items-center gap-4 border-b border-white/5 pb-6">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-surface-200">
                AK
              </div>
              <div>
                <div className="text-sm font-medium text-surface-50">
                  Adam K.
                </div>
                <div className="text-xs text-surface-200">
                  17 ans · Milieu offensif · Casablanca
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {STEPS.map((step) => (
                <li key={step.label} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-surface-50">{step.label}</span>
                  {"meta" in step && step.meta && (
                    <span className="ml-auto rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] text-surface-200">
                      {step.meta}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <footer className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[11px]">
              <span className="uppercase tracking-widest text-surface-200">
                Wipicut · analyse vidéo
              </span>
              <span className="font-medium text-gold-400">Cadre sécurisé</span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
