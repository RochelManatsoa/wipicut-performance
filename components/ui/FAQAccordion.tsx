"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import clsx from "clsx";

type Item = { question: string; answer: string };

type Props = {
  items: readonly Item[];
};

export function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-white/[0.02]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40"
            >
              <span className="text-base font-medium text-surface-50">
                {item.question}
              </span>
              <span
                className={clsx(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors",
                  isOpen
                    ? "border-gold-500/60 bg-gold-500/10 text-gold-400"
                    : "border-white/10 text-surface-200",
                )}
                aria-hidden
              >
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
            <div
              className={clsx(
                "grid transition-all duration-200",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-surface-200">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
