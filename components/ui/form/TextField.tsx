import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, hint, error, id, className, ...rest }, ref) => {
    const inputId = id ?? rest.name;
    return (
      <div className="flex flex-col">
        <label
          htmlFor={inputId}
          className="mb-2 text-[11px] uppercase tracking-[0.2em] text-surface-200"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            "w-full rounded-lg border bg-white/[0.02] px-4 py-3 text-sm text-surface-50 placeholder:text-surface-200/40 transition-colors focus:outline-none",
            error
              ? "border-red-500/40 focus:border-red-500/70"
              : "border-white/10 focus:border-gold-500/50",
            className,
          )}
          aria-invalid={!!error}
          {...rest}
        />
        {error ? (
          <p className="mt-1.5 text-[11px] text-red-400">{error}</p>
        ) : hint ? (
          <p className="mt-1.5 text-[11px] text-surface-200/70">{hint}</p>
        ) : null}
      </div>
    );
  },
);
TextField.displayName = "TextField";
