import clsx from "clsx";
import { Container } from "@/components/ui/container";
import { GenericUiShot } from "@/components/product-shots/generic-ui-shot";
import type { FeatureRowItem } from "@/lib/content/types";

export function FeatureRow({
  item,
  reverse = false,
  visual,
  variant = 0,
  stepNumber,
}: {
  item: FeatureRowItem;
  reverse?: boolean;
  visual?: React.ReactNode;
  variant?: number;
  stepNumber?: number;
}) {
  return (
    <div
      className={clsx(
        "grid items-center gap-10 py-10 md:py-12 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div>
        {stepNumber != null && (
          <span
            aria-hidden
            className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-tint text-sm font-bold tabular-nums text-primary"
          >
            {String(stepNumber).padStart(2, "0")}
          </span>
        )}
        <h2 className="text-2xl font-medium text-ink">{item.title}</h2>
        <p className="mt-4 max-w-measure whitespace-pre-line text-ink-soft">{item.body}</p>
      </div>
      {visual ?? <GenericUiShot variant={variant} />}
    </div>
  );
}

export function FeatureRowList({ items, numbered = false }: { items: FeatureRowItem[]; numbered?: boolean }) {
  return (
    <Container className="divide-y divide-border">
      {items.map((item, i) => (
        <FeatureRow
          key={item.title}
          item={item}
          reverse={i % 2 === 1}
          variant={i}
          stepNumber={numbered ? i + 1 : undefined}
        />
      ))}
    </Container>
  );
}
