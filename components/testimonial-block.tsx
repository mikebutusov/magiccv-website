import { Container } from "@/components/ui/container";
import { PlaceholderBlock } from "@/components/ui/placeholder-block";

export function TestimonialBlock({ context = "bid manager, IT consulting, NL" }: { context?: string }) {
  return (
    <Container>
      <div className="grid items-center gap-8 rounded-xl border border-dashed border-border bg-surface p-8 md:grid-cols-[auto_1fr] md:p-10">
        <PlaceholderBlock label={`{{TESTIMONIAL: ${context}}}`} aspect="aspect-square" className="w-24 md:w-28" />
        <div>
          <p className="font-serif text-xl leading-snug text-ink-soft">
            &ldquo;Quote from a design-partner {context} will go here once proof lands.&rdquo;
          </p>
          <p className="mt-4 text-sm font-medium text-muted">Name, Role -- Firm (placeholder)</p>
        </div>
      </div>
    </Container>
  );
}
