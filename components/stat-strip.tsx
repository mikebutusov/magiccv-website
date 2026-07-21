import clsx from "clsx";
import { Container } from "@/components/ui/container";
import { PlaceholderText } from "@/components/ui/placeholder-text";
import type { StatItem } from "@/lib/content/types";

export function StatStrip({ stats, inverse = false }: { stats: StatItem[]; inverse?: boolean }) {
  if (stats.length === 0) return null;
  return (
    <Container
      className={clsx(
        "grid grid-cols-1 gap-8 py-10 sm:grid-cols-2",
        stats.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3",
      )}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className={clsx(
            "text-center sm:text-left",
            i > 0 && "sm:border-l sm:pl-8",
            inverse ? "sm:border-white/15" : "sm:border-border",
          )}
        >
          <p
            className={clsx(
              "font-display text-3xl font-semibold md:text-4xl",
              inverse
                ? "text-white"
                : "bg-gradient-to-r from-primary to-[#8b7cf0] bg-clip-text text-transparent",
            )}
          >
            <PlaceholderText text={stat.value} />
          </p>
          <p className={clsx("mt-1.5 text-sm", inverse ? "text-primary-tint/70" : "text-muted")}>{stat.label}</p>
        </div>
      ))}
    </Container>
  );
}
