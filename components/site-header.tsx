"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { primaryNav } from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-serif text-xl font-medium text-ink">
          MagicCV
        </Link>

        <NavigationMenu.Root className="relative hidden lg:block" delayDuration={100}>
          <NavigationMenu.List className="flex items-center gap-1">
            {primaryNav.map((section) => (
              <NavigationMenu.Item key={section.label} className="relative">
                <NavigationMenu.Trigger className="group flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink data-[state=open]:bg-ink/5 data-[state=open]:text-ink">
                  {section.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-full left-0 rounded-lg border border-border bg-surface p-5 shadow-lg">
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
                  href="/pricing"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  Pricing
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="/blog"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  Blog
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/demo" variant="secondary">
            Book a demo
          </Button>
          <Button href="/demo" variant="primary">
            Start free trial
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-surface lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((section) => (
              <div key={section.label} className="py-2">
                <p className="px-2 text-xs font-semibold uppercase tracking-wide text-muted">{section.label}</p>
                {section.groups.map((group) => (
                  <div key={group.heading} className="mt-1">
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
            <Link href="/pricing" className="rounded px-2 py-2 text-sm font-medium text-ink" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link href="/blog" className="rounded px-2 py-2 text-sm font-medium text-ink" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <div className="mt-3 flex flex-col gap-2">
              <Button href="/demo" variant="secondary">
                Book a demo
              </Button>
              <Button href="/demo" variant="primary">
                Start free trial
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
