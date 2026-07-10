import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";
import { Check } from "lucide-react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
  error?: string;
};

export const CheckboxField = forwardRef<HTMLInputElement, Props>(
  ({ label, error, id, className, ...rest }, ref) => {
    const inputId = id ?? rest.name;
    return (
      <div className="flex flex-col">
        <label
          htmlFor={inputId}
          className={clsx(
            "group flex cursor-pointer items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20",
            error && "border-red-500/40",
            className,
          )}
        >
          <span className="relative mt-0.5">
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              className="peer sr-only"
              aria-invalid={!!error}
              {...rest}
            />
            <span className="grid h-5 w-5 place-items-center rounded border border-white/15 bg-ink-950 text-transparent transition-colors peer-checked:border-gold-500 peer-checked:bg-gold-500 peer-checked:text-ink-950 peer-focus-visible:ring-2 peer-focus-visible:ring-gold-500/40">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
          </span>
          <span className="flex-1 text-sm leading-relaxed text-surface-50">
            {label}
          </span>
        </label>
        {error && <p className="mt-1.5 text-[11px] text-red-400">{error}</p>}
      </div>
    );
  },
);
CheckboxField.displayName = "CheckboxField";
