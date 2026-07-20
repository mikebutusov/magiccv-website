import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-soft",
  secondary: "border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/5",
  ghost: "text-primary hover:text-primary-soft underline underline-offset-4",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

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
