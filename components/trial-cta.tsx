import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TrialCTA({ href = "/pricing" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary-tint px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/60"
    >
      Start free trial -- 14 days, no credit card
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
