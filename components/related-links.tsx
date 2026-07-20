import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { RelatedLink } from "@/lib/content/types";

export function RelatedLinks({ links, title = "Related" }: { links: RelatedLink[]; title?: string }) {
  if (links.length === 0) return null;
  return (
    <Container>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center justify-between gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
