import { Avatar, BrowserFrame, Chip } from "./browser-frame";

/** Mockup of the product's candidate profile with the AI-edit side panel. */
export function ProfileShot() {
  return (
    <BrowserFrame title="app.magiccv.com/candidates">
      <div className="grid grid-cols-[0.8fr_1fr]">
        <div className="hidden flex-col gap-2 border-r border-border bg-paper p-3 sm:flex">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-muted">Ask the AI</p>
          <div className="ml-auto w-[85%] rounded-lg rounded-tr-sm bg-primary-tint px-2 py-1.5 text-[9px] text-ink">
            Add a summary highlighting his fintech work.
          </div>
          <div className="w-[90%] rounded-lg rounded-tl-sm border border-border bg-surface px-2 py-1.5 text-[9px] text-ink-soft">
            Added a 3-line summary emphasizing payments &amp; real-time systems.
          </div>
          <div className="mt-auto rounded-lg border border-border bg-surface px-2 py-1.5 text-[9px] text-muted">
            Ask the AI to edit this profile…
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2.5">
            <Avatar initials="MV" className="h-9 w-9" />
            <div>
              <p className="text-[12px] font-semibold text-ink">Maksym Volkov</p>
              <p className="text-[10px] text-muted">Senior Full Stack Developer</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {["React", "TypeScript", "Node.js", "English — B2"].map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          {["Summary", "Experience", "Skills & Qualifications"].map((s) => (
            <div key={s} className="mt-3 border-t border-border pt-2">
              <p className="text-[10px] font-semibold text-ink">{s}</p>
              <div className="mt-1.5 space-y-1">
                <span className="block h-1.5 w-full rounded bg-paper" />
                <span className="block h-1.5 w-[82%] rounded bg-paper" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
