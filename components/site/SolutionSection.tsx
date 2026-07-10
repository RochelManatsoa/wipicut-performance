import {
  BadgeCheck,
  Brain,
  Dumbbell,
  Globe2,
  LineChart,
  Scale,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ExpertCategoryCard } from "@/components/ui/ExpertCategoryCard";

const CATEGORIES = [
  {
    icon: Trophy,
    title: "Anciens professionnels",
    description:
      "Retour d'expérience, exigence du haut niveau et repères concrets sur les codes du football professionnel.",
  },
  {
    icon: Globe2,
    title: "Internationaux",
    description:
      "Regard forgé au plus haut niveau international, sur la performance, la mentalité et le parcours.",
  },
  {
    icon: Users,
    title: "Coachs expérimentés",
    description:
      "Analyse technique et tactique du poste, du jeu et des axes de progression prioritaires.",
  },
  {
    icon: Dumbbell,
    title: "Préparateurs physiques",
    description:
      "Programmation, prévention et développement athlétique adaptés au calendrier et au poste.",
  },
  {
    icon: Brain,
    title: "Coachs mentaux",
    description:
      "Confiance, gestion de la pression, préparation aux échéances et travail de la constance.",
  },
  {
    icon: Video,
    title: "Analystes vidéo",
    description:
      "Transforment les matchs en séquences utiles pour comprendre les forces, les axes de progression et les décisions à travailler.",
  },
  {
    icon: BadgeCheck,
    title: "Agents licenciés FIFA",
    description:
      "Cadre juridique du contrat, orientation sportive et lecture réaliste du marché.",
  },
  {
    icon: Scale,
    title: "Avocats du sport",
    description:
      "Conseil sur les contrats, les litiges et la protection des intérêts du joueur.",
  },
  {
    icon: LineChart,
    title: "Experts finance & reconversion",
    description:
      "Gestion patrimoniale, image, fiscalité et préparation de l'après-carrière.",
  },
] as const;

export function SolutionSection() {
  return (
    <section id="experts" className="section-anchor relative border-t border-white/5">
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:56px_56px] opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionEyebrow>La réponse Olona</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
            Une équipe d'experts autour du joueur.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            Chaque profil est orienté vers les bons interlocuteurs : anciens
            pros, coachs, préparateurs, analystes, agents, avocats et experts
            carrière — vérifiables et sélectionnés.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <ExpertCategoryCard
              key={c.title}
              icon={c.icon}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
