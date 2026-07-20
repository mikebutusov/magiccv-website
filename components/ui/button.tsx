import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-soft shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-px active:shadow-none",
  secondary: "border-2 border-ink/15 bg-transparent text-ink hover:border-ink/30 hover:bg-ink/5",
  inverse: "bg-white text-primary hover:bg-white/90",
  ghost: "text-primary hover:text-primary-soft underline underline-offset-4",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={href} className={clsx(baseClasses, variantClasses[variant], className)} {...rest}>
      {children}
    </Link>
  );
}
