import Link from "next/link";

const LINKS = {
  parcours: [
    { label: "Déposer un profil joueur", href: "/deposer-profil" },
    { label: "Devenir Expert Fondateur", href: "/devenir-expert-fondateur" },
    { label: "Faire analyser mon match", href: "/deposer-profil" },
    { label: "Contact", href: "/contact" },
  ],
  navigation: [
    { label: "Joueurs & Parents", href: "/joueurs-parents" },
    { label: "Experts", href: "/experts" },
    { label: "Accompagnements", href: "/accompagnements" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "Conditions générales", href: "/conditions-generales" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div
        className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-20"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-tight text-surface-50">
                OLONA
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.35em] text-gold-500">
                Sport Experts
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-surface-200">
              Cabinet international d'experts sportifs. Technologie propriétaire
              d'analyse vidéo Wipicut, équipe dédiée à la performance et
              accompagnement structuré autour du sportif.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-surface-200">
              Parcours
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {LINKS.parcours.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-surface-50 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.25em] text-surface-200">
              Site
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {LINKS.navigation.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-surface-200 transition-colors hover:text-surface-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.25em] text-surface-200">
              Légal
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-surface-200 transition-colors hover:text-surface-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed text-surface-200">
          Olona Sport Experts ne garantit ni contrat, ni signature, ni
          intégration dans un club. La plateforme propose de l'analyse, de
          l'accompagnement et de la mise en relation avec des experts qualifiés.
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/5 pt-6 text-[11px] uppercase tracking-widest text-surface-200 md:flex-row">
          <span>© {new Date().getFullYear()} Olona Sport Experts</span>
          <span>Réseau international · Cadre sécurisé</span>
        </div>
      </div>
    </footer>
  );
}
