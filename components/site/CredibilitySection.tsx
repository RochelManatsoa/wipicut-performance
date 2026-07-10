import { Building2, ClipboardList, Trophy, Users2 } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const BADGES = [
  { icon: Trophy, label: "Joueurs accompagnés" },
  { icon: Users2, label: "Clubs" },
  { icon: ClipboardList, label: "Entraîneurs" },
  { icon: Building2, label: "Entreprises sport" },
] as const;

export function CredibilitySection() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionEyebrow>Crédibilité terrain</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-surface-50 md:text-4xl">
            Un socle terrain concret,
            <br />
            <span className="text-surface-200">pas un concept théorique.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface-200 md:text-lg">
            Olona accompagne déjà des joueurs, des clubs, des entraîneurs et des
            entreprises du secteur sportif. Cette expérience terrain constitue
            le socle du réseau international d'experts.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {BADGES.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-ink-900 text-gold-500">
                <b.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="text-sm font-medium text-surface-50">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
