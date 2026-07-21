import { ImageOff } from "lucide-react";
import clsx from "clsx";

/**
 * Visual stand-in for not-yet-available screenshots (PRD §2.6). Product-light
 * styling (lavender wash) so pages with several of these still read as
 * intentional rather than empty.
 */
export function PlaceholderBlock({
  label,
  className,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-primary-tint/50",
        aspect,
        className,
      )}
    >
      <div aria-hidden className="absolute -top-10 -left-10 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />
      <div aria-hidden className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
      <div className="relative flex flex-col items-center gap-2 rounded-xl border border-border bg-surface/80 px-5 py-4 text-center backdrop-blur-sm">
        <ImageOff className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
        <p className="max-w-[24ch] text-xs font-medium text-ink-soft">{label}</p>
      </div>
    </div>
  );
}
