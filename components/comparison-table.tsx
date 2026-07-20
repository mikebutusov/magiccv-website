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
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-surface">
            <th scope="col" className="border-b border-border p-4 font-medium text-muted">
              &nbsp;
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
