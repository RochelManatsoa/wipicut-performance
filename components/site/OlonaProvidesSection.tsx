import { Megaphone, Sparkles, Video, Workflow } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const PILLARS = [
  {
    icon: Megaphone,
    title: "Acquisition de clients",
    description:
      "Marketing digital, réseaux sociaux, SEO, publicité, relations partenaires — et un accès direct aux clubs, académies et centres de formation.",
  },
  {
    icon: Sparkles,
    title: "Image professionnelle",
    description:
      "Une page premium présentant votre parcours, votre carrière, vos diplômes, vos vidéos, vos interviews, vos services, vos disponibilités et vos tarifs.",
  },
  {
    icon: Video,
    title: "Technologie Wipicut",
    description:
      "Vidéos découpées, actions clés identifiées, statistiques individuelles et collectives, premier rapport prêt. Vous intervenez sur la valeur ajoutée.",
  },
  {
    icon: Workflow,
    title: "Support opérationnel",
    description:
      "Prise de rendez-vous, paiements sécurisés, relances, facturation, support client, diffusion des rapports. Vous vous concentrez sur votre métier.",
  },
] as const;

export function OlonaProvidesSection() {
  return (
    <section className="relative border-t border-white/5">
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:56px_56px] opacity-25"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionEyebrow>Ce qu'Olona prend en charge</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
            Une infrastructure complète,
            <br />
            <span className="text-gold-500">dédiée à votre croissance.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            Nous mettons à votre disposition l'ensemble des leviers nécessaires
            pour accompagner davantage de sportifs, en France comme à
            l'international — sans changer votre façon de travailler.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7"
            >
              <div className="shrink-0">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400">
                  <p.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-surface-50 md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-200">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
