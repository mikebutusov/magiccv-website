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
    <div className="border-b border-border bg-surface">
      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
          )}
          <h1 className="text-4xl leading-[1.1] font-medium text-ink md:text-5xl">{h1}</h1>
          <p className="mt-6 max-w-measure text-lg text-ink-soft">{sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
        <PlaceholderBlock label={`{{SCREENSHOT: ${visualAlt}}}`} aspect="aspect-[5/4]" />
      </Container>
      {stats && stats.length > 0 && (
        <div className="border-t border-border">
          <StatStrip stats={stats} />
        </div>
      )}
    </div>
  );
}
