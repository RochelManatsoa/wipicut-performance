import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { OfferCard } from "@/components/ui/OfferCard";

const OFFERS = [
  {
    eyebrow: "Premier pas",
    title: "Diagnostic Joueur",
    description:
      "Un premier avis clair pour situer le niveau, identifier les priorités et orienter vers le bon accompagnement.",
    ctaLabel: "Commencer mon diagnostic",
    ctaHref: "/deposer-profil",
  },
  {
    eyebrow: "Analyse vidéo",
    title: "Video Report Wipicut",
    description:
      "Analyse vidéo individuelle avec séquences clés, statistiques simples et recommandations concrètes.",
    ctaLabel: "Faire analyser mon match",
    ctaHref: "/deposer-profil",
    highlighted: true,
  },
  {
    eyebrow: "Sur mesure",
    title: "Session Expert",
    description:
      "Un expert selon votre besoin : poste, mental, physique, carrière, juridique ou finance.",
    ctaLabel: "Trouver le bon expert",
    ctaHref: "/accompagnements",
  },
  {
    eyebrow: "Cadre complet",
    title: "Pack Elite 360",
    description:
      "Accompagnement complet pour les joueurs ambitieux ou haut niveau : vidéo, expertise et suivi structuré.",
    ctaLabel: "Structurer mon projet",
    ctaHref: "/accompagnements",
  },
] as const;

export function OffersSection() {
  return (
    <section
      id="accompagnements"
      className="section-anchor relative border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionEyebrow>Accompagnements</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
            Quatre formats, un même standard d'expertise.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            Chaque accompagnement est cadré avant le démarrage. Les tarifs
            dépendent de l'expert et du format choisi, et sont validés en amont.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {OFFERS.map((offer) => (
            <OfferCard
              key={offer.title}
              eyebrow={offer.eyebrow}
              title={offer.title}
              description={offer.description}
              ctaLabel={offer.ctaLabel}
              ctaHref={offer.ctaHref}
              highlighted={"highlighted" in offer ? offer.highlighted : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
