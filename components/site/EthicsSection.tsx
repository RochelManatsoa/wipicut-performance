import { Handshake, ShieldCheck, UserCheck } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TrustBlock } from "@/components/ui/TrustBlock";

const BLOCKS = [
  {
    icon: Handshake,
    title: "Pas de fausses promesses",
    description:
      "Nous ne promettons pas de contrat, de club ou de carrière professionnelle. Nous apportons de l'analyse, de l'expertise et un cadre.",
  },
  {
    icon: UserCheck,
    title: "Des experts vérifiables",
    description:
      "Chaque expert est présenté par son parcours, ses compétences et son expérience réelle. Pas de vitrine anonyme.",
  },
  {
    icon: ShieldCheck,
    title: "Paiements sécurisés",
    description:
      "Les transactions sont centralisées par Olona Sport pour protéger les clients et les experts, à chaque étape.",
  },
] as const;

export function EthicsSection() {
  return (
    <section className="relative border-t border-white/5">
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:56px_56px] opacity-25"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionEyebrow>Engagement</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
            Expertise, transparence, sécurité.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            Trois principes qui structurent chaque mission Olona Sport Experts,
            côté joueur comme côté expert.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {BLOCKS.map((b) => (
            <TrustBlock
              key={b.title}
              icon={b.icon}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
