import { BrowserFrame } from "./browser-frame";

/**
 * Standalone on-brand CV document preview. Variants cover the anonymized and
 * multilingual stories so use-case/feature pages get a fitting visual.
 */
export function CvPreviewShot({ variant = "default" }: { variant?: "default" | "anonymized" | "multilingual" }) {
  const name = variant === "anonymized" ? "Candidate #C-2048" : "Maksym V.";
  return (
    <BrowserFrame title="app.magiccv.com/cvs">
      <div className="bg-[#eef1fb] p-5">
        <div className="mx-auto max-w-[320px] rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#12b886]">◆</span>
              <span className="text-xs font-semibold text-ink">TechMagic</span>
            </div>
            {variant === "multilingual" && (
              <div className="flex gap-1">
                {["EN", "DE", "FR"].map((l, i) => (
                  <span
                    key={l}
                    className={`rounded px-1.5 py-0.5 text-[8px] font-semibold ${i === 1 ? "bg-primary text-white" : "bg-primary-tint text-primary"}`}
                  >
                    {l}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="mt-5 flex items-center gap-3">
            {variant === "anonymized" ? (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-muted">◼</span>
            ) : null}
            <div>
              <p className="text-lg font-bold text-ink">{name}</p>
              <p className="text-[11px] text-muted">
                {variant === "multilingual" ? "Senior Full-Stack Entwickler" : "Senior Full Stack Developer"}
              </p>
            </div>
          </div>
          <div className="mt-5 border-t border-border pt-3">
            <p className="text-[10px] font-bold tracking-wide text-[var(--color-pop-ink)]">
              {variant === "multilingual" ? "ÜBER MICH" : "ABOUT ME"}
            </p>
            <div className="mt-2 space-y-1.5">
              <span className="block h-1.5 w-full rounded bg-paper" />
              <span className="block h-1.5 w-[94%] rounded bg-paper" />
              <span className="block h-1.5 w-[80%] rounded bg-paper" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold tracking-wide text-[var(--color-pop-ink)]">
              {variant === "multilingual" ? "QUALIFIKATIONEN" : "QUALIFICATIONS"}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {["ReactJS, Next.js", "Node, Golang", "AWS, Docker", "GraphQL, REST"].map((t) => (
                <div key={t} className="flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-[var(--color-pop)]" />
                  <span className="truncate text-[9px] text-ink-soft">{t}</span>
                </div>
              ))}
            </div>
          </div>
          {variant === "anonymized" && (
            <div className="mt-4 rounded-md bg-primary-tint px-2 py-1 text-center text-[9px] font-medium text-primary">
              Anonymized for blind evaluation
            </div>
          )}
        </div>
      </div>
    </BrowserFrame>
  );
}
