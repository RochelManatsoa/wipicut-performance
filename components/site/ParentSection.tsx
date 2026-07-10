import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CTAButton } from "@/components/ui/CTAButton";

const REASSURANCE = [
  "Avis fiables",
  "Zéro fausse promesse",
  "Cadre sécurisé",
] as const;

export function ParentSection() {
  return (
    <section className="relative border-t border-white/5">
      <div
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-gold-500/[0.04] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <div className="flex justify-center">
          <SectionEyebrow>Pour les familles</SectionEyebrow>
        </div>

        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
          Pour les parents qui veulent protéger
          <br className="hidden md:block" />
          <span className="text-surface-200">
            {" "}
            et mieux accompagner leur enfant.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
          Olona Sport Experts aide les familles à obtenir des avis fiables,
          éviter les fausses promesses et mieux comprendre les étapes du
          parcours football.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface-50 md:text-lg">
          Nous ne vendons pas du rêve. Nous apportons de la clarté, de
          l'expertise et un cadre sécurisé.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {REASSURANCE.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-surface-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <CTAButton href="/deposer-profil" variant="primary" size="lg">
            Obtenir un avis fiable pour mon enfant
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
