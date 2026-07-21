import clsx from "clsx";

const GRADIENTS = [
  "from-primary/15 via-primary-tint to-surface",
  "from-[var(--color-pop)]/12 via-primary-tint to-surface",
  "from-primary/20 via-surface to-primary-tint",
];

/** Branded gradient thumbnail for blog cards/heroes (no stock imagery needed). */
export function BlogThumb({
  category,
  seed = "",
  className,
}: {
  category: string;
  seed?: string;
  className?: string;
}) {
  const idx = [...(seed || category)].reduce((a, c) => a + c.charCodeAt(0), 0) % GRADIENTS.length;
  return (
    <div
      className={clsx(
        "relative flex items-end overflow-hidden rounded-2xl border border-border bg-gradient-to-br p-4",
        GRADIENTS[idx],
        className,
      )}
    >
      <div aria-hidden className="absolute -top-8 -right-6 h-24 w-24 rounded-full bg-white/40 blur-2xl" />
      <span className="relative rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
        {category}
      </span>
    </div>
  );
}
