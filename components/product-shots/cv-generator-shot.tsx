import { BrowserFrame } from "./browser-frame";

/**
 * Mockup of the product's AI CV generator: an assistant chat on the left and a
 * live, on-brand CV preview on the right. Mirrors the real app screen.
 */
export function CvGeneratorShot() {
  return (
    <BrowserFrame title="app.magiccv.com/cvs">
      <div className="grid grid-cols-1 sm:grid-cols-[0.85fr_1fr]">
        {/* Chat panel */}
        <div className="hidden flex-col gap-3 border-r border-border bg-paper p-4 sm:flex">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary-tint px-3 py-2 text-[11px] leading-snug text-ink">
            Turn this RFP into a tailored CV pack for our 3 best-fit consultants.
          </div>
          <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-border bg-surface px-3 py-2 text-[11px] leading-snug text-ink-soft">
            Matched 3 consultants to the brief and reshaped each CV around the win
            conditions. Every claim traces back to their profile.
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] text-muted">Generating pack…</span>
          </div>
          <div className="mt-auto flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
            <span className="text-[11px] text-muted">Ask the AI to refine…</span>
            <span className="ml-auto rounded-md bg-primary px-2 py-1 text-[10px] font-semibold text-white">
              Send
            </span>
          </div>
        </div>

        {/* CV preview panel */}
        <div className="bg-[#eef1fb] p-4">
          <div className="mx-auto max-w-[280px] rounded-lg bg-white p-5 shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-[#12b886]">◆</span>
              <span className="text-[11px] font-semibold text-ink">TechMagic</span>
            </div>
            <p className="mt-4 text-lg font-bold text-ink">Maksym V.</p>
            <p className="text-[11px] text-muted">Senior Full Stack Developer</p>
            <div className="mt-4 border-t border-border pt-3">
              <p className="text-[10px] font-bold tracking-wide text-[var(--color-pop-ink)]">ABOUT ME</p>
              <div className="mt-1.5 space-y-1">
                <span className="block h-1.5 w-full rounded bg-paper" />
                <span className="block h-1.5 w-[92%] rounded bg-paper" />
                <span className="block h-1.5 w-[78%] rounded bg-paper" />
              </div>
            </div>
            <div className="mt-3">
              <p className="text-[10px] font-bold tracking-wide text-[var(--color-pop-ink)]">QUALIFICATIONS</p>
              <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                {["ReactJS, Next.js", "Node, Golang", "AWS, Docker", "GraphQL, REST"].map((t) => (
                  <div key={t} className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-[var(--color-pop)]" />
                    <span className="truncate text-[9px] text-ink-soft">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
