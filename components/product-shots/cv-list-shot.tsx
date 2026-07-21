import { Avatar, BrowserFrame, Chip } from "./browser-frame";

const CARDS = [
  { name: "Maksym V.", role: "Senior Full Stack Developer", initials: "MV", tags: ["JavaScript", "React", "TypeScript"] },
  { name: "Luka-Teodor H.", role: "Senior Frontend Engineer", initials: "LH", tags: ["Ukraine", "Lviv", "React"] },
  { name: "Nodari P.", role: "Full-Stack Developer", initials: "NP", tags: ["Node.js", "TypeScript", "React"] },
  { name: "Yuliia R.", role: "Project Coordinator", initials: "YR", tags: ["Jira", "Project Manager"] },
];

/** Mockup of the product's CV / candidate library grid. */
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
        <p className="mt-3 text-[10px] text-muted">177 CVs found</p>
        <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {CARDS.map((c) => (
            <div key={c.name} className="rounded-xl border border-border bg-surface p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[12px] font-semibold text-ink">{c.name}</p>
                  <p className="text-[10px] text-muted">{c.role}</p>
                </div>
                <Avatar initials={c.initials} className="h-7 w-7" />
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1">
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
