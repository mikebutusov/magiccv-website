import { Container } from "@/components/ui/container";

/**
 * SAMPLE DATA - fictional consulting firm names, not real customers. These
 * are placeholder wordmarks to be replaced with real design-partner logos
 * before the site is promoted. No real brands/trademarks are used.
 * Each entry gets a distinct type treatment so the wall reads like a row of
 * real wordmarks rather than a list of identical labels.
 */
const SAMPLE_FIRMS: { name: string; className: string }[] = [
  { name: "NORDHAUS", className: "font-semibold tracking-[0.25em] text-[13px]" },
  { name: "Meridian", className: "font-display text-[19px] font-bold italic" },
  { name: "Lindqvist & Co", className: "font-serif text-[17px] font-medium" },
  { name: "brightbridge", className: "text-[16px] font-bold lowercase tracking-tight" },
  { name: "KESSLER", className: "text-[14px] font-black tracking-[0.15em]" },
  { name: "Vantage&Roe", className: "font-mono text-[14px] font-semibold" },
];

export function LogoWall({ label = "Trusted by European consulting teams" }: { label?: string }) {
  return (
    <Container className="py-10 md:py-12">
      <p className="text-center text-sm font-medium uppercase tracking-wide text-muted">{label}</p>
      <div className="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-6">
        {SAMPLE_FIRMS.map((firm) => (
          <div
            key={firm.name}
            className={`flex h-10 items-center justify-center text-center text-muted opacity-80 transition-opacity hover:opacity-100 ${firm.className}`}
          >
            {firm.name}
          </div>
        ))}
      </div>
    </Container>
  );
}
