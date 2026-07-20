import { ImageOff } from "lucide-react";
import clsx from "clsx";

/**
 * Visual stand-in for not-yet-available screenshots/logos (PRD §2.6).
 * Deliberately looks like intentional "artwork coming soon" -- a soft
 * gradient mesh with floating color blobs -- rather than a broken-image
 * state, so pages with lots of these don't read as empty/unfinished.
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
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-primary-tint",
        aspect,
        className,
      )}
    >
      <div aria-hidden className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-accent/25 blur-2xl" />
      <div aria-hidden className="absolute -right-8 -bottom-12 h-44 w-44 rounded-full bg-lime/40 blur-2xl" />
      <div aria-hidden className="absolute top-1/2 right-1/4 h-24 w-24 -translate-y-1/2 rounded-full bg-primary/15 blur-xl" />
      <div className="relative flex flex-col items-center gap-2 rounded-3xl border border-white/60 bg-white/70 px-5 py-4 text-center shadow-sm backdrop-blur-sm">
        <ImageOff className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
        <p className="max-w-[22ch] text-xs font-medium text-ink-soft">{label}</p>
      </div>
    </div>
  );
}
