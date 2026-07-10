"use client";

import clsx from "clsx";
import {
  useController,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

type Option = { value: string; label: string };

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  hint?: string;
  options: readonly Option[];
  error?: string;
};

export function CheckboxGroupField<T extends FieldValues>({
  name,
  control,
  label,
  hint,
  options,
  error,
}: Props<T>) {
  const { field } = useController({ name, control });
  const values: string[] = Array.isArray(field.value) ? field.value : [];

  const toggle = (val: string) => {
    field.onChange(
      values.includes(val)
        ? values.filter((v) => v !== val)
        : [...values, val],
    );
  };

  return (
    <div>
      <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-surface-200">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = values.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              aria-pressed={active}
              className={clsx(
                "rounded-full border px-4 py-2 text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40",
                active
                  ? "border-gold-500/60 bg-gold-500/10 text-gold-400"
                  : "border-white/10 bg-white/[0.02] text-surface-200 hover:border-white/20 hover:text-surface-50",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      {error ? (
        <p className="mt-2 text-[11px] text-red-400">{error}</p>
      ) : hint ? (
        <p className="mt-2 text-[11px] text-surface-200/70">{hint}</p>
      ) : null}
    </div>
  );
}
