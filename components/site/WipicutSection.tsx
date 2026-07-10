import { PlayCircle } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CTAButton } from "@/components/ui/CTAButton";

const SEQUENCES = [
  { time: "00:42", label: "Prise d'info avant réception", tag: "Positionnement" },
  { time: "01:18", label: "Décrochage entre les lignes", tag: "Prise de balle" },
  { time: "02:07", label: "Duel 1v1 côté droit", tag: "Duel offensif" },
  { time: "03:24", label: "Frappe extérieure surface", tag: "Finition" },
] as const;

export function WipicutSection() {
  return (
    <section className="relative border-t border-white/5 bg-gradient-to-b from-ink-900/30 to-transparent">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionEyebrow>Wipicut · analyse vidéo multisports</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl lg:text-5xl">
            La technologie propriétaire
            <br />
            <span className="text-gold-500">
              au cœur du dispositif.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-surface-200 md:text-lg">
            Développée pour répondre aux exigences du sport de haut niveau,
            Wipicut structure l'analyse individuelle et collective des
            performances : découpage vidéo, actions clés, statistiques
            individuelles et collectives, premier rapport d'analyse.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-surface-200 md:text-lg">
            Elle est renforcée par les équipes d'Olona Sport, fortes de plus de
            <span className="text-surface-50"> vingt ans d'expérience</span> en
            analyse vidéo, observation et accompagnement de joueurs et
            d'équipes.
          </p>

          <div className="mt-6 rounded-xl border border-gold-500/25 bg-gold-500/[0.04] p-4">
            <p className="text-sm leading-relaxed text-surface-50">
              <span className="font-medium text-gold-400">
                L'expert ne commence jamais avec une feuille blanche.
              </span>{" "}
              Il intervient sur la partie à forte valeur ajoutée :
              interprétation, recommandations, accompagnement.
            </p>
          </div>

          <div className="mt-8">
            <CTAButton href="/deposer-profil" variant="primary" size="lg">
              Faire analyser mon match
            </CTAButton>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-gold-500/[0.08] via-transparent to-field-500/[0.06] blur-2xl"
            aria-hidden
          />

          <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold-500/10 text-gold-400">
                  <PlayCircle className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs font-medium text-surface-50">
                    Match du 12 novembre · 90 min
                  </div>
                  <div className="text-[11px] text-surface-200">
                    U19 · Championnat régional
                  </div>
                </div>
              </div>
              <span className="rounded-full border border-gold-500/40 bg-gold-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-gold-400">
                Wipicut
              </span>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.04]">
              <div className="flex h-full items-stretch">
                <span className="w-[8%] bg-gold-500/60" />
                <span className="w-[2%] bg-transparent" />
                <span className="w-[6%] bg-gold-500/60" />
                <span className="w-[3%] bg-transparent" />
                <span className="w-[9%] bg-gold-500/60" />
                <span className="w-[4%] bg-transparent" />
                <span className="w-[7%] bg-gold-500/60" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {SEQUENCES.map((seq) => (
                <div
                  key={seq.time}
                  className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                >
                  <span className="font-mono text-xs text-gold-400">
                    {seq.time}
                  </span>
                  <span className="flex-1 text-sm text-surface-50">
                    {seq.label}
                  </span>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-surface-200">
                    {seq.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/5 pt-5 text-center">
              <div>
                <div className="font-display text-xl font-semibold text-surface-50">
                  27
                </div>
                <div className="text-[10px] uppercase tracking-widest text-surface-200">
                  Séquences
                </div>
              </div>
              <div>
                <div className="font-display text-xl font-semibold text-surface-50">
                  84%
                </div>
                <div className="text-[10px] uppercase tracking-widest text-surface-200">
                  Passes utiles
                </div>
              </div>
              <div>
                <div className="font-display text-xl font-semibold text-surface-50">
                  6
                </div>
                <div className="text-[10px] uppercase tracking-widest text-surface-200">
                  Axes clés
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
