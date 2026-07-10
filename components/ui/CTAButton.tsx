import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

const SIZE = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-sm",
} satisfies Record<Size, string>;

const VARIANT = {
  primary:
    "bg-gold-500 text-ink-950 hover:bg-gold-400 shadow-[0_10px_30px_-15px_rgba(214,168,90,0.6)] hover:shadow-[0_16px_40px_-15px_rgba(214,168,90,0.75)]",
  secondary:
    "border border-white/15 text-surface-50 hover:border-gold-500/60 hover:text-gold-400 hover:bg-white/[0.02]",
} satisfies Record<Variant, string>;

export function CTAButton({
  href,
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
        SIZE[size],
        VARIANT[variant],
        className,
      )}
    >
      {children}
      {icon}
    </Link>
  );
}
