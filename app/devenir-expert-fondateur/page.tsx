import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ExpertForm } from "@/components/site/ExpertForm";

export const metadata: Metadata = {
  title: "Devenir Expert Fondateur — Olona Sport Experts",
  description:
    "Rejoignez un réseau international d'experts football. Gardez votre indépendance, fixez vos tarifs et choisissez vos missions dans un cadre sécurisé.",
};

export default function DevenirExpertFondateurPage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-premium-gradient" aria-hidden />
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-30"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-20 md:pt-28">
        <SectionEyebrow>Parcours expert</SectionEyebrow>
        <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
          Devenir Expert Fondateur
          <br />
          <span className="text-gold-500">Olona Sport.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
          Rejoignez un réseau international d'experts football et développez
          votre expertise dans un cadre sélectif, sécurisé et professionnel.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-surface-200/80">
          Vous gardez votre indépendance, vos tarifs et le choix de vos
          missions. Olona Sport gère la visibilité, la qualification, les
          paiements et les dossiers vidéo Wipicut.
        </p>

        <div className="mt-12">
          <ExpertForm />
        </div>
      </div>
    </main>
  );
}
