import type { Metadata } from "next";
import { XCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { LevelCard } from "@/components/ui/LevelCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FinalCTA } from "@/components/site/FinalCTA";

export const metadata: Metadata = {
  title: "Joueurs & Parents — Olona Sport Experts",
  description:
    "Un accompagnement football plus clair, plus structuré et plus sécurisé pour les joueurs et les familles.",
};

const LEVELS = [
  {
    ageRange: "12 – 15 ans",
    title: "Préformation",
    description:
      "Poser les bases : hygiène de vie, discipline, attitude et travail des fondamentaux.",
    focus: ["Discipline", "Attitude", "Rôle parent", "Bases haut niveau"],
  },
  {
    ageRange: "16 – 18 ans",
    title: "Formation",
    description:
      "Structurer le progrès : lecture du poste, préparation aux échéances et travail vidéo.",
    focus: ["Poste", "Vidéo", "Mental", "Préparation aux essais"],
  },
  {
    ageRange: "18 – 23 ans",
    title: "Haut niveau / semi-pro",
    description:
      "Prendre des décisions éclairées : contrat, performance, préparation physique et carrière.",
    focus: ["Carrière", "Agent", "Performance", "Contrat"],
  },
  {
    ageRange: "23 ans et +",
    title: "Carrière & reconversion",
    description:
      "Structurer l'image, la finance, le juridique et préparer l'après-carrière.",
    focus: ["Image", "Finance", "Juridique", "Après-carrière"],
  },
] as const;

const NOT_PROMISED = [
  "Un contrat, un club, une signature.",
  "Une promesse de résultat sportif.",
  "Une garantie de carrière professionnelle.",
] as const;

const FAQ = [
  {
    question: "Olona Sport Experts garantit-il un club ou un contrat ?",
    answer:
      "Non. Nous apportons de l'analyse, de l'expertise et un cadre. Aucune promesse contractuelle sur un club, un contrat ou une signature.",
  },
  {
    question: "Combien coûte un accompagnement ?",
    answer:
      "Le tarif dépend de l'expert et du format choisi. Il est cadré et validé avant le démarrage de la mission, sans mauvaise surprise.",
  },
  {
    question: "Mon enfant est mineur, comment ça se passe ?",
    answer:
      "Le contact du parent ou du représentant légal est obligatoire. Les échanges et la validation de la mission passent par lui.",
  },
  {
    question: "Quel est le délai entre le dépôt et la réponse ?",
    answer:
      "L'équipe Olona qualifie chaque demande et revient sous 48 h ouvrées avec une orientation claire vers l'accompagnement adapté.",
  },
  {
    question: "Peut-on changer d'expert si le format ne convient pas ?",
    answer:
      "Oui. Chaque mission est cadrée en amont et peut être ajustée si le besoin évolue ou si l'expert n'est pas le bon match.",
  },
] as const;

export default function JoueursParentsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Joueurs & Parents"
        title={
          <>
            Un accompagnement football plus clair,
            <br />
            <span className="text-surface-200">
              plus structuré et plus sécurisé.
            </span>
          </>
        }
        description="Olona Sport Experts aide les joueurs et les familles à obtenir des avis fiables, comprendre les étapes du parcours et éviter les fausses promesses."
      />

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <SectionEyebrow>Pour quels niveaux ?</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl">
              Un cadre adapté à chaque étape du parcours.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200">
              De la préformation à la reconversion, les besoins et les
              interlocuteurs changent. L'équipe Olona vous oriente vers le bon
              format selon l'âge, le niveau et les objectifs.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {LEVELS.map((l) => (
              <LevelCard key={l.title} {...l} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-gradient-to-b from-ink-900/30 to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <SectionEyebrow>Transparence</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl">
            Ce que nous ne promettons pas.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200">
            Autant l'énoncer clairement. Le sérieux d'un accompagnement passe
            aussi par la clarté sur ce qui n'est pas de notre ressort.
          </p>

          <ul className="mt-10 grid gap-3 md:grid-cols-3">
            {NOT_PROMISED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <XCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-surface-200/60"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-surface-50">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-gold-500/25 bg-gold-500/[0.04] p-5">
            <p className="text-sm leading-relaxed text-surface-50">
              <span className="font-medium text-gold-400">
                Ce que nous proposons :
              </span>{" "}
              de l'analyse, de l'expertise, un cadre sécurisé et une mise en
              relation avec des experts vérifiables.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl">
            Les questions les plus fréquentes.
          </h2>
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
