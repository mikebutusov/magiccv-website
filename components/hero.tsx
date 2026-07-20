import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderBlock } from "@/components/ui/placeholder-block";
import { StatStrip } from "@/components/stat-strip";
import type { StatItem } from "@/lib/content/types";

export function Hero({
  eyebrow,
  h1,
  sub,
  primaryCta = { label: "Start free trial", href: "/demo" },
  secondaryCta = { label: "Book a demo", href: "/demo" },
  visualAlt = "Product screenshot",
  stats,
}: {
  eyebrow?: string;
  h1: string;
  sub: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visualAlt?: string;
  stats?: StatItem[];
}) {
  return (
    <div className="bg-grain relative overflow-hidden bg-primary">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />
      <Container className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          {eyebrow && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-lime-ink">
              {eyebrow}
            </p>
          )}
          <h1 className="text-5xl leading-[1.05] font-semibold text-white md:text-6xl">{h1}</h1>
          <p className="mt-6 max-w-measure text-lg text-primary-tint/85">{sub}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="inverse">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
        <PlaceholderBlock label={`{{SCREENSHOT: ${visualAlt}}}`} aspect="aspect-[5/4]" />
      </Container>
      {stats && stats.length > 0 && (
        <div className="relative border-t border-white/10">
          <StatStrip stats={stats} inverse />
        </div>
      )}
    </div>
  );
}
