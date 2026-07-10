import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PlayerForm } from "@/components/site/PlayerForm";

export const metadata: Metadata = {
  title: "Déposer un profil joueur — Olona Sport Experts",
  description:
    "Présentez votre parcours, vos objectifs et vos vidéos. L'équipe Olona Sport qualifie chaque demande et vous oriente vers l'accompagnement adapté.",
};

export default function DeposerProfilPage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-premium-gradient" aria-hidden />
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-30"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-20 md:pt-28">
        <SectionEyebrow>Parcours client</SectionEyebrow>
        <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
          Déposer un profil joueur.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
          Présentez votre parcours, vos objectifs et vos vidéos. L'équipe Olona
          Sport analyse votre demande et vous oriente vers l'accompagnement le
          plus adapté.
        </p>

        <div className="mt-12">
          <PlayerForm />
        </div>
      </div>
    </main>
  );
}
