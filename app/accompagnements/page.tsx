import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CTAButton } from "@/components/ui/CTAButton";
import { FinalCTA } from "@/components/site/FinalCTA";

export const metadata: Metadata = {
  title: "Accompagnements — Olona Sport Experts",
  description:
    "Diagnostic, analyse vidéo Wipicut, session expert et packs complets : cinq formats pour structurer un parcours football sérieux.",
};

const OFFERS = [
  {
    n: "01",
    eyebrow: "Premier pas",
    title: "Diagnostic Joueur",
    objective: "Obtenir un premier avis et identifier le bon accompagnement.",
    includes: [
      "Analyse du profil déposé",
      "Orientation vers le bon type d'expertise",
      "Réponse cadrée sous 48 h ouvrées",
    ],
    ctaLabel: "Commencer mon diagnostic",
    ctaHref: "/deposer-profil",
  },
  {
    n: "02",
    eyebrow: "Analyse vidéo",
    title: "Video Report Wipicut",
    objective:
      "Faire analyser une vidéo de match ou une séquence, avec un rapport structuré.",
    includes: [
      "Extraction des séquences clés",
      "Statistiques simples et lecture du poste",
      "Axes de progression et points d'analyse",
      "Dossier livré sous 5 à 7 jours",
    ],
    ctaLabel: "Faire analyser mon match",
    ctaHref: "/deposer-profil",
    highlighted: true,
  },
  {
    n: "03",
    eyebrow: "Sur mesure",
    title: "Session Expert",
    objective:
      "Accéder à un expert selon un besoin ciblé : poste, mental, physique, carrière, juridique, finance.",
    includes: [
      "Choix de la catégorie d'expertise",
      "Session cadrée (durée et objectifs définis)",
      "Notes de session livrées",
      "Rebrief possible selon la mission",
    ],
    ctaLabel: "Trouver le bon expert",
    ctaHref: "/deposer-profil",
  },
  {
    n: "04",
    eyebrow: "Jeune talent",
    title: "Pack Jeune Talent",
    objective:
      "Accompagnement combiné joueur + parents pour la préformation et la formation.",
    includes: [
      "Diagnostic initial",
      "Video Report Wipicut",
      "Session avec un expert formation",
      "Point d'échange dédié aux parents",
    ],
    ctaLabel: "Structurer le parcours de mon enfant",
    ctaHref: "/deposer-profil",
  },
  {
    n: "05",
    eyebrow: "Elite",
    title: "Pack Elite 360",
    objective:
      "Accompagnement complet pour les joueurs ambitieux ou haut niveau.",
    includes: [
      "Diagnostic + Video Report Wipicut",
      "Sessions avec plusieurs experts (technique, mental, physique)",
      "Point carrière et orientation stratégique",
      "Suivi structuré sur la durée",
    ],
    ctaLabel: "Structurer mon projet",
    ctaHref: "/deposer-profil",
    highlighted: true,
  },
] as const;

export default function AccompagnementsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Accompagnements"
        title={
          <>
            Cinq formats,
            <br />
            <span className="text-gold-500">
              un même standard d'expertise.
            </span>
          </>
        }
        description="Chaque accompagnement est cadré avant le démarrage. Les tarifs dépendent de l'expert et du format choisi — validés en amont, jamais après."
      />

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="space-y-6">
            {OFFERS.map((offer) => (
              <OfferDetail key={offer.n} {...offer} />
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center md:p-8">
            <p className="text-sm leading-relaxed text-surface-200">
              Les tarifs sont fixés par l'expert et cadrés avant le démarrage.
              Aucune facturation n'est déclenchée sans validation préalable.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}

function OfferDetail({
  n,
  eyebrow,
  title,
  objective,
  includes,
  ctaLabel,
  ctaHref,
  highlighted = false,
}: {
  n: string;
  eyebrow: string;
  title: string;
  objective: string;
  includes: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-2xl border p-7 md:p-10 ${
        highlighted
          ? "border-gold-500/25 bg-gradient-to-br from-gold-500/[0.05] via-transparent to-transparent"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {highlighted && (
        <div
          className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
          aria-hidden
        />
      )}

      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] tracking-widest text-gold-500">
              {n}
            </span>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold text-surface-50 md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-200 md:text-base">
            {objective}
          </p>
          <div className="mt-6">
            <CTAButton
              href={ctaHref}
              variant={highlighted ? "primary" : "secondary"}
              size="md"
            >
              {ctaLabel}
            </CTAButton>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="text-[11px] uppercase tracking-[0.25em] text-surface-200">
            Ce qui est inclus
          </div>
          <ul className="mt-4 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-surface-50">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[11px] uppercase tracking-widest text-surface-200/70">
            Tarif selon expert et accompagnement choisi
          </p>
        </div>
      </div>
    </article>
  );
}
