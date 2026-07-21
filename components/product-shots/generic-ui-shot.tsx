import { Avatar, BrowserFrame, Chip } from "./browser-frame";

/**
 * A believable, generic product-UI panel used as the default visual for
 * in-page feature rows (replaces the old screenshot placeholder). Three
 * layout variants keep repeated rows from looking identical.
 */
export function GenericUiShot({ variant = 0 }: { variant?: number }) {
  const v = variant % 3;
  return (
    <BrowserFrame title="app.magiccv.com">
      <div className="grid grid-cols-[64px_1fr]">
        {/* mini sidebar */}
        <div className="flex flex-col gap-3 border-r border-border bg-paper p-3">
          <div className="h-6 w-6 rounded-md bg-primary" />
          <div className="mt-1 space-y-2">
            <div className="h-2 w-full rounded bg-primary-tint" />
            <div className="h-2 w-full rounded bg-border" />
            <div className="h-2 w-full rounded bg-border" />
          </div>
        </div>

        <div className="p-4">
          {v === 0 && <ListVariant />}
          {v === 1 && <EditorVariant />}
          {v === 2 && <PreviewVariant />}
        </div>
      </div>
    </BrowserFrame>
  );
}

function ListVariant() {
  const rows = [
    { n: "Maksym V.", r: "Senior Full Stack Developer", i: "MV", t: ["React", "TypeScript"] },
    { n: "Yuliia R.", r: "Project Coordinator", i: "YR", t: ["Jira", "PM"] },
    { n: "Nodari P.", r: "Full-Stack Developer", i: "NP", t: ["Node.js", "React"] },
  ];
  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <div className="h-6 w-40 rounded-md bg-paper" />
        <span className="rounded-md bg-primary px-2 py-1 text-[9px] font-semibold text-white">+ New</span>
      </div>
      <div className="space-y-2">
        {rows.map((row) => (
          <div key={row.n} className="flex items-center gap-3 rounded-lg border border-border bg-surface p-2.5">
            <Avatar initials={row.i} className="h-7 w-7" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-ink">{row.n}</p>
              <p className="truncate text-[9px] text-muted">{row.r}</p>
            </div>
            <div className="hidden gap-1 sm:flex">
              {row.t.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function EditorVariant() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-2">
        <div className="rounded-lg border border-border bg-surface p-2.5">
          <p className="text-[9px] font-semibold tracking-wide text-primary">SUMMARY</p>
          <div className="mt-1.5 space-y-1">
            <span className="block h-1.5 w-full rounded bg-paper" />
            <span className="block h-1.5 w-[85%] rounded bg-paper" />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-2.5">
          <p className="text-[9px] font-semibold tracking-wide text-primary">EXPERIENCE</p>
          <div className="mt-1.5 space-y-1">
            <span className="block h-1.5 w-full rounded bg-paper" />
            <span className="block h-1.5 w-[70%] rounded bg-paper" />
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-primary-tint/50 p-2.5">
        <div className="ml-auto mb-2 w-[80%] rounded-lg rounded-tr-sm bg-primary-tint px-2 py-1.5 text-[9px] text-ink">
          Reshape this CV around the brief.
        </div>
        <div className="w-[85%] rounded-lg rounded-tl-sm border border-border bg-surface px-2 py-1.5 text-[9px] text-ink-soft">
          Done — re-emphasized the relevant experience.
        </div>
      </div>
    </div>
  );
}

function PreviewVariant() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {["TechMagic", "Classic", "Modern", "Harvard"].map((t, i) => (
        <div key={t} className="rounded-lg border border-border bg-surface p-2">
          <div className={`h-1.5 w-10 rounded ${i % 2 ? "bg-primary" : "bg-[var(--color-pop)]"}`} />
          <div className="mt-1.5 space-y-1">
            <span className="block h-1 w-full rounded bg-paper" />
            <span className="block h-1 w-[80%] rounded bg-paper" />
            <span className="block h-1 w-[90%] rounded bg-paper" />
          </div>
          <p className="mt-1.5 text-[8px] font-medium text-muted">{t}</p>
        </div>
      ))}
    </div>
  );
}
