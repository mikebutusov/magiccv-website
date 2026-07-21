import { BrowserFrame } from "./browser-frame";

const TEMPLATES: { name: string; accent: string }[] = [
  { name: "TechMagic", accent: "#12b886" },
  { name: "Classic", accent: "#1a1b2e" },
  { name: "Modern", accent: "#2f6fed" },
  { name: "Harvard", accent: "#b23a48" },
  { name: "MagicFuse", accent: "#5a4bd8" },
  { name: "Executive", accent: "#0f766e" },
];

/** Mockup of the product's template gallery. */
export function TemplatesShot() {
  return (
    <BrowserFrame title="app.magiccv.com/templates">
      <div className="p-4">
        <p className="mb-3 text-[10px] text-muted">10 templates found</p>
        <div className="grid grid-cols-3 gap-2.5">
          {TEMPLATES.map((t) => (
            <div key={t.name} className="overflow-hidden rounded-lg border border-border bg-surface">
              <div className="p-2">
                <div className="h-1.5 w-8 rounded" style={{ backgroundColor: t.accent }} />
                <div className="mt-1.5 space-y-1">
                  <span className="block h-1 w-full rounded bg-paper" />
                  <span className="block h-1 w-[85%] rounded bg-paper" />
                  <span className="block h-1 w-[70%] rounded bg-paper" />
                  <span className="mt-1 block h-1 w-[90%] rounded bg-paper" />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border px-2 py-1.5">
                <span className="text-[8px] font-medium text-ink">{t.name}</span>
                <span className="rounded bg-primary-tint px-1 py-0.5 text-[7px] font-semibold text-primary">Use</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
