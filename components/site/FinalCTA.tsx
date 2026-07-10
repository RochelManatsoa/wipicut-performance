import { CTAButton } from "@/components/ui/CTAButton";

export function FinalCTA() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 p-10 text-center md:p-16">
          <div
            className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-30"
            aria-hidden
          />
          <div
            className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold-500/[0.08] blur-3xl"
            aria-hidden
          />
          <div
            className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
            aria-hidden
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold-400">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold-500"
                aria-hidden
              />
              Prochaine étape
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
              Prêt à structurer
              <br className="hidden md:block" />
              <span className="text-gold-500"> votre parcours football ?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-surface-200">
              Deux parcours, un même standard d'expertise. Choisissez votre
              point d'entrée dans le réseau Olona Sport Experts.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/deposer-profil" variant="primary" size="lg">
                Déposer un profil joueur
              </CTAButton>
              <CTAButton
                href="/devenir-expert-fondateur"
                variant="secondary"
                size="lg"
              >
                Rejoindre le cercle des experts
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
