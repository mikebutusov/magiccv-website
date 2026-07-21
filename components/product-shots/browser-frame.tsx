import clsx from "clsx";

/** A lightweight app-window chrome wrapper for in-code product mockups. */
export function BrowserFrame({
  title = "app.magiccv.com",
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-24px_rgba(26,27,46,0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-paper px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <div className="ml-3 flex-1 truncate rounded-md bg-surface px-3 py-1 text-center text-[11px] text-muted">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}

/** Small round avatar with initials, matching the product's lavender avatars. */
export function Avatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-semibold text-primary",
        className,
      )}
    >
      {initials}
    </span>
  );
}

/** Soft lavender tag pill, matching the product's skill/tag chips. */
export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-primary-tint px-2 py-0.5 text-[11px] font-medium text-primary">
      {children}
    </span>
  );
}
