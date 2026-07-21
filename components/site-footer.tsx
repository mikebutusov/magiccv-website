import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Logo } from "@/components/ui/logo";
import { footerNav, site } from "@/lib/site";
import { dictionaries, LOCALE_LABELS, localePrefix, type AnyLocale } from "@/lib/i18n";

const columns: { key: keyof typeof footerNav; title: string; items: readonly { label: string; href: string }[] }[] = [
  { key: "product", title: "Product", items: footerNav.product },
  { key: "solutions", title: "Solutions", items: footerNav.solutions },
  { key: "comparisons", title: "Comparisons", items: footerNav.comparisons },
  { key: "resources", title: "Resources", items: footerNav.resources },
  { key: "company", title: "Company", items: footerNav.company },
  { key: "legal", title: "Legal", items: footerNav.legal },
];

const SWITCHER: AnyLocale[] = ["en", "de", "fr", "nl", "sv"];

export function SiteFooter({ locale = "en" }: { locale?: AnyLocale }) {
  const dict = locale === "en" ? null : dictionaries[locale];
  const description = dict?.footer.description ?? site.description;
  const euBadge = dict?.footer.euBadge ?? "EU data residency";
  const newsletterTitle = dict?.footer.newsletterTitle ?? "Get proposal & CV-ops tips in your inbox";
  const languageLabel = dict?.footer.language ?? "Language:";
  const rights = dict?.footer.rights ?? "All rights reserved.";
  const prefix = localePrefix(locale);
  const lx = (href: string) =>
    href === "/blog" || href.startsWith("/legal") || !href.startsWith("/") ? href : `${prefix}${href}`;
  const heading = (key: keyof typeof footerNav, fallback: string) =>
    dict?.footer.headings[key] ?? fallback;

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(6,1fr)]">
          <div>
            <Link href={localePrefix(locale) || "/"} aria-label="MagicCV home">
              <Logo />
            </Link>
            <p className="mt-3 max-w-[32ch] text-sm text-ink-soft">{description}</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              {euBadge}
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
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {heading(column.key, column.title)}
              </p>
              <ul className="mt-3 space-y-2">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link href={lx(item.href)} className="text-sm text-ink-soft hover:text-primary">
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
            <p className="text-sm font-medium text-ink">{newsletterTitle}</p>
            <div className="mt-2">
              <NewsletterSignup compact />
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>{languageLabel}</span>
            {SWITCHER.map((code) => (
              <Link
                key={code}
                href={localePrefix(code) || "/"}
                className={clsx(
                  "rounded border px-2 py-1 font-medium transition-colors",
                  code === locale
                    ? "border-primary bg-primary-tint text-primary"
                    : "border-border text-muted hover:border-primary/40 hover:text-ink",
                )}
              >
                {LOCALE_LABELS[code]}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. {rights}
        </p>
      </Container>
    </footer>
  );
}
