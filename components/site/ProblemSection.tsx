import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function ProblemSection() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionEyebrow>Le constat</SectionEyebrow>

        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
          Le football ne manque pas de talents.
          <br />
          <span className="text-surface-200">
            Il manque souvent du bon accompagnement.
          </span>
        </h2>

        <div className="mt-10 grid gap-8 text-base leading-relaxed text-surface-200 md:grid-cols-2 md:text-lg">
          <p>
            Beaucoup de joueurs avancent seuls, avec des avis contradictoires,
            des vidéos non exploitées et peu de recul sur leur niveau réel. Les
            parents ne savent pas toujours à qui faire confiance.
          </p>
          <p>
            Les joueurs de haut niveau ont besoin d'experts fiables pour mieux
            gérer leur performance, leur carrière, leur image et leurs
            décisions. Olona Sport Experts apporte un cadre clair, sécurisé et
            professionnel.
          </p>
        </div>
      </div>
    </section>
  );
}
