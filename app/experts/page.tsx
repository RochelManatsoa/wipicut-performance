import type { Metadata } from "next";
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
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ExpertCategoryCard } from "@/components/ui/ExpertCategoryCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTAButton } from "@/components/ui/CTAButton";
import { OlonaProvidesSection } from "@/components/site/OlonaProvidesSection";
import { ExpertRecruitmentSection } from "@/components/site/ExpertRecruitmentSection";
import { DifferentiatorSection } from "@/components/site/DifferentiatorSection";
import { CredibilitySection } from "@/components/site/CredibilitySection";

export const metadata: Metadata = {
  title: "Experts sportifs — Olona Sport Experts",
  description:
    "Vous apportez votre expertise, nous développons votre activité. Rejoignez un cabinet international d'experts sportifs — indépendance, technologie propriétaire, infrastructure complète.",
};

const CATEGORIES = [
  {
    icon: Trophy,
    title: "Anciens professionnels",
    description:
      "Retour d'expérience et repères concrets sur les codes du sport professionnel.",
  },
  {
    icon: Globe2,
    title: "Internationaux",
    description:
      "Regard forgé au plus haut niveau international, sur la performance et le parcours.",
  },
  {
    icon: Users,
    title: "Coachs expérimentés",
    description:
      "Analyse technique et tactique du poste, du jeu et des axes de progression.",
  },
  {
    icon: Dumbbell,
    title: "Préparateurs physiques",
    description:
      "Programmation, prévention et développement athlétique adaptés au poste.",
  },
  {
    icon: Brain,
    title: "Coachs mentaux",
    description:
      "Confiance, gestion de la pression, préparation aux échéances.",
  },
  {
    icon: Video,
    title: "Analystes vidéo",
    description:
      "Séquences utiles, forces et axes de progression exploitables sur le terrain.",
  },
  {
    icon: BadgeCheck,
    title: "Agents licenciés FIFA",
    description:
      "Cadre juridique du contrat, orientation sportive et lecture du marché.",
  },
  {
    icon: Scale,
    title: "Avocats du sport",
    description:
      "Conseil sur les contrats, les litiges et la protection des intérêts.",
  },
  {
    icon: LineChart,
    title: "Experts finance & reconversion",
    description:
      "Gestion patrimoniale, image, fiscalité et préparation de l'après-carrière.",
  },
] as const;

const FAQ = [
  {
    question: "Comment fonctionne le commissionnement ?",
    answer:
      "La commission Olona dépend de l'origine du client et du niveau de service fourni. Chaque mission est cadrée avant validation : tout est transparent et communiqué avant le démarrage.",
  },
  {
    question: "Est-ce que je fixe librement mes tarifs ?",
    answer:
      "Oui, entièrement. Vous conservez la maîtrise de votre grille tarifaire, de votre méthode et de votre marque personnelle. Olona n'impose aucun tarif.",
  },
  {
    question: "Suis-je obligé d'accepter les missions transmises ?",
    answer:
      "Non. Vous acceptez ou refusez chaque mission selon votre agenda, votre positionnement et votre lecture du besoin.",
  },
  {
    question: "Comment sont qualifiées les demandes ?",
    answer:
      "L'équipe Olona échange avec le client, identifie le besoin prioritaire, vérifie le sérieux du projet et prépare le dossier avant de vous le transmettre.",
  },
  {
    question: "Qu'est-ce que Wipicut change côté expert ?",
    answer:
      "Vous recevez des dossiers vidéo prêts à analyser (séquences clés, statistiques, contexte). Vous ne partez jamais d'une feuille blanche et vous concentrez sur l'expertise.",
  },
] as const;

export default function ExpertsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Cabinet international · Experts sportifs"
        title={
          <>
            Vous apportez votre expertise.
            <br />
            <span className="text-gold-500">
              Nous développons votre activité.
            </span>
          </>
        }
        description="Rejoignez un cabinet international d'experts sportifs. Vous gardez votre indépendance, vos tarifs et vos méthodes. Olona apporte la marque, la technologie Wipicut, l'équipe opérationnelle et le réseau."
      />

      <OlonaProvidesSection />
      <ExpertRecruitmentSection />
      <DifferentiatorSection />
      <CredibilitySection />

      <section className="relative border-t border-white/5">
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <SectionEyebrow>Experts recherchés</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl">
              Les profils qui structurent le réseau.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200">
              Chaque catégorie apporte une compétence distincte autour du
              sportif. Le réseau est ouvert à tous les profils rigoureux, dans
              chacune de ces expertises.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <ExpertCategoryCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <SectionEyebrow className="mx-auto">Commissionnement</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl">
            Un modèle transparent, cadré avant chaque mission.
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-surface-200">
            <p>
              Chaque mission est cadrée avant validation. La commission Olona
              dépend de l'origine du client et du niveau de service fourni.
            </p>
            <p>
              Tout est communiqué et validé en amont, avant le démarrage de la
              mission — jamais après.
            </p>
          </div>
          <div className="mt-10">
            <CTAButton
              href="/devenir-expert-fondateur"
              variant="primary"
              size="lg"
            >
              Comprendre le modèle expert
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <SectionEyebrow>FAQ Expert</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl">
            Les questions les plus fréquentes.
          </h2>
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>
    </main>
  );
}
