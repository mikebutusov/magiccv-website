import clsx from "clsx";

/**
 * MagicCV logo, rebuilt as inline SVG from the brand mark (a 4-point "magic"
 * sparkle in an indigo→violet gradient) plus the "magiccv" wordmark.
 * Vector so it stays crisp at any size and inherits the theme.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label="MagicCV"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="magiccv-spark" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C6BF0" />
          <stop offset="1" stopColor="#4A3CC2" />
        </linearGradient>
      </defs>
      <path
        d="M12 1c1.05 7.2 3.8 9.95 11 11-7.2 1.05-9.95 3.8-11 11-1.05-7.2-3.8-9.95-11-11 7.2-1.05 9.95-3.8 11-11Z"
        fill="url(#magiccv-spark)"
      />
    </svg>
  );
}

export function Logo({ className, wordmark = true }: { className?: string; wordmark?: boolean }) {
  return (
    <span className={clsx("inline-flex items-center gap-2", className)}>
      <LogoMark className="h-6 w-6" />
      {wordmark && (
        <span className="text-xl font-semibold tracking-tight text-ink">
          magic<span className="text-primary">cv</span>
        </span>
      )}
    </span>
  );
}
