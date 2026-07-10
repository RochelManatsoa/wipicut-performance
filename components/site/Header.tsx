"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { CTAButton } from "@/components/ui/CTAButton";

const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "Joueurs & Parents", href: "/joueurs-parents" },
  { label: "Experts", href: "/experts" },
  { label: "Accompagnements", href: "/accompagnements" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
          <Link
            href="/"
            aria-label="Olona Sport Experts — Accueil"
            className="flex items-center leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950 rounded"
          >
            <div>
              <div className="font-display text-base font-semibold tracking-tight text-surface-50">
                OLONA
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.35em] text-gold-500">
                Sport Experts
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-surface-200 transition-colors hover:text-surface-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <CTAButton
              href="/devenir-expert-fondateur"
              variant="secondary"
              size="sm"
            >
              Devenir Expert Fondateur
            </CTAButton>
            <CTAButton href="/deposer-profil" variant="primary" size="sm">
              Déposer un profil
            </CTAButton>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-surface-50 transition-colors hover:border-gold-500/40 md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-30 flex flex-col bg-ink-950/95 px-6 pb-10 pt-24 backdrop-blur-2xl transition-opacity duration-200 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-4 text-lg font-medium text-surface-50 transition-colors hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 pt-8">
          <CTAButton
            href="/deposer-profil"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Déposer un profil joueur
          </CTAButton>
          <CTAButton
            href="/devenir-expert-fondateur"
            variant="secondary"
            size="lg"
            className="w-full"
          >
            Devenir Expert Fondateur
          </CTAButton>
        </div>
      </div>
    </>
  );
}
