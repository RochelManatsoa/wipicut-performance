import { forwardRef, type SelectHTMLAttributes } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

type Option = { value: string; label: string };

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: readonly Option[];
  hint?: string;
  error?: string;
  placeholder?: string;
};

export const SelectField = forwardRef<HTMLSelectElement, Props>(
  (
    { label, hint, error, id, className, options, placeholder, ...rest },
    ref,
  ) => {
    const inputId = id ?? rest.name;
    return (
      <div className="flex flex-col">
        <label
          htmlFor={inputId}
          className="mb-2 text-[11px] uppercase tracking-[0.2em] text-surface-200"
        >
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={clsx(
              "w-full appearance-none rounded-lg border bg-white/[0.02] px-4 py-3 pr-10 text-sm text-surface-50 transition-colors focus:outline-none",
              error
                ? "border-red-500/40 focus:border-red-500/70"
                : "border-white/10 focus:border-gold-500/50",
              className,
            )}
            aria-invalid={!!error}
            defaultValue={rest.defaultValue ?? ""}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200"
            aria-hidden
          />
        </div>
        {error ? (
          <p className="mt-1.5 text-[11px] text-red-400">{error}</p>
        ) : hint ? (
          <p className="mt-1.5 text-[11px] text-surface-200/70">{hint}</p>
        ) : null}
      </div>
    );
  },
);
SelectField.displayName = "SelectField";
