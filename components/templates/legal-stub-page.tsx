import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/ui/container";

/**
 * Placeholder legal page. Real Privacy/Terms/DPA copy needs sign-off from
 * counsel before publishing - this intentionally does not invent binding
 * legal terms. Swap this content once the real document is ready.
 */
export function LegalStubPage({ title, sections }: { title: string; sections: string[] }) {
  return (
    <>
      <Breadcrumbs items={[{ label: title, href: "#" }]} />
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">{title}</h1>
        <div className="mt-6 max-w-measure rounded-2xl border border-dashed border-border bg-surface p-6 text-sm text-muted">
          Placeholder - final legal copy pending review by counsel. Structure below reflects what this document
          will cover.
        </div>
        <ul className="mt-8 max-w-measure list-disc space-y-3 pl-6 text-ink-soft">
          {sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </Section>
    </>
  );
}
