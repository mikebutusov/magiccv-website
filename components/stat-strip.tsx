import { Container } from "@/components/ui/container";
import { PlaceholderText } from "@/components/ui/placeholder-text";
import type { StatItem } from "@/lib/content/types";

export function StatStrip({ stats }: { stats: StatItem[] }) {
  if (stats.length === 0) return null;
  return (
    <Container className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={i} className="text-center sm:text-left">
          <p className="font-serif text-2xl font-medium text-primary md:text-3xl">
            <PlaceholderText text={stat.value} />
          </p>
          <p className="mt-1 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </Container>
  );
}
