import { BrowserFrame } from "./browser-frame";

/** Mockup of the product's "Build the profile" step: upload a CV or start manually. */
export function ImportShot() {
  return (
    <BrowserFrame title="app.magiccv.com/candidates">
      <div className="p-5">
        <div className="mx-auto mb-4 flex max-w-[260px] items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">✓</span>
          <span className="h-0.5 flex-1 bg-primary" />
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">2</span>
        </div>
        <p className="text-center text-[13px] font-semibold text-ink">Build the profile</p>
        <p className="mt-1 text-center text-[10px] text-muted">
          Either way you get a single profile you can refine with chat.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-primary/40 bg-primary-tint/40 p-4 text-center">
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-primary-tint text-primary">↑</div>
            <p className="mt-2 text-[11px] font-semibold text-ink">Upload CV</p>
            <p className="mt-1 text-[9px] leading-snug text-muted">AI reads the file and writes a structured profile.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-primary-tint text-primary">▤</div>
            <p className="mt-2 text-[11px] font-semibold text-ink">Build manually</p>
            <p className="mt-1 text-[9px] leading-snug text-muted">Start from a skeleton with standard headings.</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
