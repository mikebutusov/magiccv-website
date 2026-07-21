import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PlaceholderText } from "@/components/ui/placeholder-text";
import type { PersonaPain } from "@/lib/content/types";

export function PersonaPainCard({ pain }: { pain: PersonaPain }) {
  return (
    <Container>
      <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_24px_60px_-40px_rgba(26,27,46,0.4)] lg:grid lg:grid-cols-[1.1fr_1fr]">
        <div className="relative bg-ink p-8 md:p-10">
          <span aria-hidden className="pointer-events-none absolute -top-6 left-6 font-display text-[7rem] leading-none text-primary/40">
            &ldquo;
          </span>
          <blockquote className="relative font-display text-2xl leading-snug text-white md:text-3xl">
            {pain.quote}
          </blockquote>
        </div>
        <div className="p-8 md:p-10">
          <p className="max-w-measure text-lg font-medium text-primary">{pain.answer}</p>
          <ul className="mt-6 space-y-3">
            {pain.proofPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-tint">
                  <Check className="h-3 w-3 text-primary" aria-hidden />
                </span>
                <span>
                  <PlaceholderText text={point} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
