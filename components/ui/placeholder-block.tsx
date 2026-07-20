import { ImageOff } from "lucide-react";
import clsx from "clsx";

/** Visual stand-in for not-yet-available screenshots/logos (PRD §2.6). */
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
        "flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-surface p-6 text-center",
        aspect,
        className,
      )}
    >
      <ImageOff className="h-6 w-6 text-muted" strokeWidth={1.5} aria-hidden />
      <p className="text-xs font-medium text-muted">{label}</p>
    </div>
  );
}
