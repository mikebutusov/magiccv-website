import { PlaceholderText } from "@/components/ui/placeholder-text";
import type { ComparisonRow } from "@/lib/content/types";

export function ComparisonTable({
  competitorName,
  rows,
  caption,
}: {
  competitorName: string;
  rows: ComparisonRow[];
  caption?: string;
}) {
  return (
    <div
      className="overflow-x-auto rounded-2xl border border-border focus-visible:outline-2 focus-visible:outline-primary"
      tabIndex={0}
      role="region"
      aria-label={caption ?? `MagicCV vs ${competitorName} comparison`}
    >
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-surface">
            <th scope="col" className="border-b border-border p-4 font-medium text-muted">
              <span className="sr-only">Category</span>
            </th>
            <th scope="col" className="border-b border-border bg-primary-tint p-4 font-semibold text-primary">
              MagicCV
            </th>
            <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-surface even:bg-paper">
              <th scope="row" className="border-b border-border p-4 font-medium text-ink">
                {row.category}
              </th>
              <td className="border-b border-border bg-primary-tint/40 p-4 font-medium text-primary">
                <PlaceholderText text={row.magiccv} />
              </td>
              <td className="border-b border-border p-4 text-ink-soft">
                <PlaceholderText text={row.competitor} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
