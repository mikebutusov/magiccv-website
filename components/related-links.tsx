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
              className="card-lift group flex items-center justify-between gap-2 rounded-xl border border-border bg-surface px-5 py-4 text-sm font-medium text-ink hover:border-primary/40 hover:text-primary"
            >
              {link.label}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
