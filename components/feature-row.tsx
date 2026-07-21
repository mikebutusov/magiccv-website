import clsx from "clsx";
import { Container } from "@/components/ui/container";
import { PlaceholderBlock } from "@/components/ui/placeholder-block";
import type { FeatureRowItem } from "@/lib/content/types";

export function FeatureRow({
  item,
  reverse = false,
  visual,
}: {
  item: FeatureRowItem;
  reverse?: boolean;
  visual?: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "grid items-center gap-10 py-10 md:py-12 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div>
        <h3 className="text-2xl font-medium text-ink">{item.title}</h3>
        <p className="mt-4 max-w-measure text-ink-soft">{item.body}</p>
      </div>
      {visual ?? <PlaceholderBlock label={`{{SCREENSHOT: ${item.screenshotAlt}}}`} />}
    </div>
  );
}

export function FeatureRowList({ items }: { items: FeatureRowItem[] }) {
  return (
    <Container className="divide-y divide-border">
      {items.map((item, i) => (
        <FeatureRow key={item.title} item={item} reverse={i % 2 === 1} />
      ))}
    </Container>
  );
}
