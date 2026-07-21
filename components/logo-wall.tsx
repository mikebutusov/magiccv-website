import { Container } from "@/components/ui/container";

/**
 * SAMPLE DATA -- fictional consulting firm names, not real customers. These
 * are placeholder wordmarks to be replaced with real design-partner logos
 * before the site is promoted. No real brands/trademarks are used.
 */
const SAMPLE_FIRMS = [
  "Nordhaus Advisory",
  "Meridian Consulting",
  "Lindqvist & Co",
  "Brightbridge Group",
  "Kessler Partners",
  "Vantage & Roe",
];

export function LogoWall({ label = "Trusted by European consulting teams" }: { label?: string }) {
  return (
    <Container className="py-10 md:py-12">
      <p className="text-center text-sm font-medium uppercase tracking-wide text-muted">{label}</p>
      <div className="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-6">
        {SAMPLE_FIRMS.map((firm) => (
          <div
            key={firm}
            className="flex h-10 items-center justify-center text-center text-sm font-semibold tracking-tight text-ink/45"
          >
            {firm}
          </div>
        ))}
      </div>
    </Container>
  );
}
