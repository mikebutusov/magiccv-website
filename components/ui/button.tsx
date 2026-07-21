import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-soft shadow-sm",
  secondary: "border border-border bg-surface text-ink hover:bg-primary-tint hover:border-primary/30",
  inverse: "bg-white text-primary hover:bg-white/90",
  ghost: "text-primary hover:text-primary-soft underline underline-offset-4",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

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
