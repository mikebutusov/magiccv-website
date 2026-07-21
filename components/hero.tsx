import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GenericUiShot } from "@/components/product-shots/generic-ui-shot";
import { StatStrip } from "@/components/stat-strip";
import type { StatItem } from "@/lib/content/types";

export function Hero({
  eyebrow,
  h1,
  sub,
  primaryCta = { label: "Get started free", href: "https://getmagic.cv/sign-up" },
  secondaryCta = { label: "Book a demo", href: "/demo" },
  visual,
  stats,
}: {
  eyebrow?: string;
  h1: string;
  sub: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
  stats?: StatItem[];
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-surface">
      {/* soft lavender glow, product-light aesthetic */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary-tint blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-primary-tint/60 blur-3xl" />
      <Container className="relative grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          {eyebrow && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-tint px-3.5 py-1.5 text-xs font-semibold text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl leading-[1.08] font-semibold text-ink md:text-5xl">{h1}</h1>
          <p className="mt-5 max-w-measure text-lg text-ink-soft">{sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
        {visual ?? <GenericUiShot />}
      </Container>
      {stats && stats.length > 0 && (
        <div className="relative border-t border-border bg-paper">
          <StatStrip stats={stats} />
        </div>
      )}
    </div>
  );
}
