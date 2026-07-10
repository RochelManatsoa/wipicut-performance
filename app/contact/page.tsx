import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Contact — Olona Sport Experts",
  description:
    "Choisissez votre point d'entrée dans le réseau Olona Sport Experts : dépôt de profil joueur ou candidature Expert Fondateur.",
};

const ENTRY_POINTS = [
  {
    eyebrow: "Parcours client",
    title: "Déposer un profil joueur",
    description:
      "Vous êtes joueur, parent, club ou académie. Présentez le parcours et l'équipe Olona vous oriente vers l'accompagnement adapté sous 48 h ouvrées.",
    href: "/deposer-profil",
    primary: true,
  },
  {
    eyebrow: "Parcours expert",
    title: "Devenir Expert Fondateur",
    description:
      "Vous êtes ancien pro, coach, préparateur, analyste, agent, avocat ou expert carrière. Rejoignez le réseau et gardez votre indépendance.",
    href: "/devenir-expert-fondateur",
    primary: false,
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Choisissez votre point d'entrée
            <br />
            <span className="text-surface-200">dans le réseau Olona.</span>
          </>
        }
        description="Chaque demande passe par un formulaire dédié pour que l'équipe Olona qualifie correctement le besoin dès la première prise de contact."
      />

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-6 md:grid-cols-2">
            {ENTRY_POINTS.map((ep) => (
              <Link
                key={ep.href}
                href={ep.href}
                className={`group relative flex flex-col rounded-2xl border p-8 transition-all md:p-10 ${
                  ep.primary
                    ? "border-gold-500/25 bg-gradient-to-br from-gold-500/[0.06] to-transparent hover:border-gold-500/50"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.03]"
                }`}
              >
                {ep.primary && (
                  <div
                    className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
                    aria-hidden
                  />
                )}
                <SectionEyebrow>{ep.eyebrow}</SectionEyebrow>
                <h2 className="mt-6 font-display text-2xl font-semibold text-surface-50 md:text-3xl">
                  {ep.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-surface-200 md:text-base">
                  {ep.description}
                </p>
                <span
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    ep.primary
                      ? "text-gold-400"
                      : "text-surface-50 group-hover:text-gold-400"
                  }`}
                >
                  Accéder au formulaire
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-ink-900 text-gold-500">
                  <Mail className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-surface-200">
                    Autre demande
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-surface-50">
                    Presse, partenariat, information générale : contactez-nous
                    par mail. L'équipe Olona revient sous 5 jours ouvrés.
                  </p>
                </div>
              </div>
              <a
                href="mailto:s.maurel@olona-outsourcing.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-surface-50 transition hover:border-gold-500/60 hover:text-gold-400"
              >
                s.maurel@olona-outsourcing.com
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-surface-200/70">
            Olona Sport Experts ne garantit ni contrat, ni signature, ni
            intégration dans un club. La plateforme propose de l'analyse, de
            l'accompagnement et de la mise en relation avec des experts
            qualifiés.
          </p>
        </div>
      </section>
    </main>
  );
}
