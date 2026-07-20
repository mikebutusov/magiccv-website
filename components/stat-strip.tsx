import clsx from "clsx";
import { Container } from "@/components/ui/container";
import { PlaceholderText } from "@/components/ui/placeholder-text";
import type { StatItem } from "@/lib/content/types";

export function StatStrip({ stats, inverse = false }: { stats: StatItem[]; inverse?: boolean }) {
  if (stats.length === 0) return null;
  return (
    <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 md:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={i} className="text-center sm:text-left">
          <p
            className={clsx(
              "font-display text-3xl font-semibold md:text-4xl",
              inverse ? "text-lime" : "text-primary",
            )}
          >
            <PlaceholderText text={stat.value} />
          </p>
          <p className={clsx("mt-1 text-sm", inverse ? "text-primary-tint/70" : "text-muted")}>{stat.label}</p>
        </div>
      ))}
    </Container>
  );
}
