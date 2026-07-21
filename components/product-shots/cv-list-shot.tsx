import { Avatar, BrowserFrame, Chip } from "./browser-frame";

const CARDS = [
  { name: "Maksym V.", role: "Senior Full Stack Developer", initials: "MV", tags: ["React", "TypeScript", "AWS"], badge: "Available", badgeTone: "green" as const },
  { name: "Luka-Teodor H.", role: "Senior Frontend Engineer", initials: "LH", tags: ["React", "Next.js", "German C1"], badge: "Available", badgeTone: "green" as const },
  { name: "Nodari P.", role: "Full-Stack Developer", initials: "NP", tags: ["Node.js", "TypeScript", "React"], badge: "From May 12", badgeTone: "amber" as const },
  { name: "Yuliia R.", role: "Delivery Lead", initials: "YR", tags: ["PRINCE2", "Public sector"], badge: "Available", badgeTone: "green" as const },
];

const FILTERS = ["React", "German", "Senior+"];

/** Mockup of the product's CV / candidate library grid with active skill filters. */
export function CvListShot() {
  return (
    <BrowserFrame title="app.magiccv.com/cvs">
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 rounded-lg border border-border bg-paper px-3 py-2 text-[11px] text-muted">
            Search CVs, candidates or tags…
          </div>
          <span className="rounded-md bg-primary px-2.5 py-1.5 text-[10px] font-semibold text-white">+ Create new CV</span>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="text-[9px] font-semibold uppercase tracking-wide text-muted">Filters</span>
          {FILTERS.map((f) => (
            <span key={f} className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-0.5 text-[10px] font-medium text-white">
              {f} <span className="opacity-70">×</span>
            </span>
          ))}
          <span className="text-[10px] text-muted">8 of 177 match</span>
        </div>
        <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {CARDS.map((c) => (
            <div key={c.name} className="rounded-xl border border-border bg-surface p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[12px] font-semibold text-ink">{c.name}</p>
                  <p className="text-[10px] text-muted">{c.role}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <Avatar initials={c.initials} className="h-7 w-7" />
                  <span
                    className={
                      c.badgeTone === "green"
                        ? "rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-800"
                        : "rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold text-amber-800"
                    }
                  >
                    {c.badge}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {c.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
