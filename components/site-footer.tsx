import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Logo } from "@/components/ui/logo";
import { footerNav, site } from "@/lib/site";

const columns: { title: string; items: readonly { label: string; href: string }[] }[] = [
  { title: "Product", items: footerNav.product },
  { title: "Solutions", items: footerNav.solutions },
  { title: "Comparisons", items: footerNav.comparisons },
  { title: "Resources", items: footerNav.resources },
  { title: "Company", items: footerNav.company },
  { title: "Legal", items: footerNav.legal },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(6,1fr)]">
          <div>
            <Link href="/" aria-label="MagicCV home">
              <Logo />
            </Link>
            <p className="mt-3 max-w-[32ch] text-sm text-ink-soft">{site.description}</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              EU data residency
            </div>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{column.title}</p>
              <ul className="mt-3 space-y-2">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-ink-soft hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-ink">Get proposal & CV-ops tips in your inbox</p>
            <div className="mt-2">
              <NewsletterSignup compact />
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>Language:</span>
            <span className="rounded border border-border px-2 py-1 font-medium text-ink">EN</span>
            {["DE", "FR", "NL", "SE"].map((lang) => (
              <span key={lang} className="rounded border border-border px-2 py-1 text-muted/70" title="Coming soon">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
