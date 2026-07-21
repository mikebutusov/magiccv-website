"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { primaryNav, site } from "@/lib/site";
import { dictionaries, localePrefix, type AnyLocale } from "@/lib/i18n";

export function SiteHeader({ locale = "en" }: { locale?: AnyLocale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dict = locale === "en" ? null : dictionaries[locale];
  const prefix = localePrefix(locale);
  const t = {
    top: (label: string) => dict?.nav.top[label] ?? label,
    pricing: dict?.nav.pricing ?? "Pricing",
    blog: dict?.nav.blog ?? "Blog",
    login: dict?.nav.login ?? "Log in",
    bookDemo: dict?.nav.bookDemo ?? "Book a demo",
    getStarted: dict?.nav.getStarted ?? "Get started free",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href={prefix || "/"} aria-label="MagicCV home">
          <Logo />
        </Link>

        <NavigationMenu.Root className="relative hidden xl:block" delayDuration={100}>
          <NavigationMenu.List className="flex items-center gap-1">
            {primaryNav.map((section) => (
              <NavigationMenu.Item key={section.label} className="relative">
                <NavigationMenu.Trigger className="group flex items-center gap-1 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink data-[state=open]:bg-ink/5 data-[state=open]:text-ink">
                  {t.top(section.label)}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-full left-0 rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="flex gap-8">
                    {section.groups.map((group) => (
                      <div key={group.heading} className="min-w-[200px]">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                          {group.heading}
                        </p>
                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <NavigationMenu.Link asChild>
                                <Link
                                  href={item.href}
                                  className="block rounded px-2 py-1.5 text-sm text-ink-soft hover:bg-primary-tint hover:text-primary"
                                >
                                  {item.label}
                                </Link>
                              </NavigationMenu.Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href={`${prefix}/pricing`}
                  className="block whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {t.pricing}
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="/blog"
                  className="block whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {t.blog}
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={site.appUrl}
            className="whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            {t.login}
          </a>
          <Button href="/demo" variant="secondary">
            {t.bookDemo}
          </Button>
          <Button href={site.signUpUrl} variant="primary">
            {t.getStarted}
          </Button>
        </div>

        <button
          type="button"
          className="xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-surface xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((section) => (
              <div key={section.label} className="py-2">
                <p className="px-2 text-xs font-semibold uppercase tracking-wide text-muted">{t.top(section.label)}</p>
                {section.groups.map((group) => (
                  <div key={group.heading} className="mt-1">
                    {section.groups.length > 1 && (
                      <p className="mt-2 px-2 text-xs font-medium text-muted/70">{group.heading}</p>
                    )}
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded px-2 py-2 text-sm text-ink-soft hover:bg-primary-tint hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <Link href={`${prefix}/pricing`} className="rounded px-2 py-2 text-sm font-medium text-ink" onClick={() => setMobileOpen(false)}>
              {t.pricing}
            </Link>
            <Link href="/blog" className="rounded px-2 py-2 text-sm font-medium text-ink" onClick={() => setMobileOpen(false)}>
              {t.blog}
            </Link>
            <a href={site.appUrl} className="rounded px-2 py-2 text-sm font-medium text-ink">
              {t.login}
            </a>
            <div className="mt-3 flex flex-col gap-2">
              <Button href="/demo" variant="secondary">
                {t.bookDemo}
              </Button>
              <Button href={site.signUpUrl} variant="primary">
                {t.getStarted}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
